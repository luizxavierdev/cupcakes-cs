import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { writeFileSync } from 'fs';

import { AppModule } from './app.module';
import { AppEnvironment } from './modules/shared/enums/app-environment';

let app: any;

async function bootstrap() {
  console.log('Starting NestJS bootstrap...');
  console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
  
  const nestApp = await NestFactory.create(AppModule);

  const apiLogger = new Logger('Api');

  const port = process.env.PORT || 3335;
  const host = process.env.HOST || `http://localhost:${port}`;
  const config = new DocumentBuilder()
    .setTitle('Backend PIT')
    .setDescription(process.env[AppEnvironment.serviceDescription])
    .setVersion(process.env[AppEnvironment.serviceVersion])
    .addServer(host)
    .build();

  const document = SwaggerModule.createDocument(nestApp, config);
  
  // Configuração do Swagger para funcionar corretamente no Vercel
  const swaggerOptions = {
    swaggerOptions: {
      persistAuthorization: true,
      // Configurar para funcionar em ambientes serverless
      tryItOutEnabled: true,
    },
    customSiteTitle: 'Cupcakes CS API Documentation',
    customCss: '.swagger-ui .topbar { display: none }',
    // Usar CDN para recursos estáticos em produção (Vercel)
    // Isso resolve o problema de recursos estáticos não carregarem em ambientes serverless
    customJs: process.env.NODE_ENV === 'production' ? [
      'https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-bundle.js',
      'https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-standalone-preset.js',
    ] : [],
    customCssUrl: process.env.NODE_ENV === 'production' 
      ? 'https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui.css'
      : undefined,
  };
  
  // Configurar Swagger na rota raiz (/)
  SwaggerModule.setup('/', nestApp, document, swaggerOptions);
  
  // Configurar Swagger também em /swagger para manter compatibilidade
  const swaggerPath = '/swagger';
  SwaggerModule.setup(swaggerPath, nestApp, document, swaggerOptions);
  
  // Salvar swagger.json apenas em desenvolvimento
  if (process.env.NODE_ENV !== 'production') {
    writeFileSync('./swagger.json', JSON.stringify(document, null, '\t'));
  }
  
  // Swagger disponível em produção também
  apiLogger.log(`📚 Swagger docs available on ${host}/`);
  apiLogger.log(`📚 Swagger docs also available on ${host}${swaggerPath}`);

  nestApp.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      transform: true,
    }),
  );

  nestApp.enableCors({ origin: '*' });
  
  await nestApp.init();
  
  return nestApp.getHttpAdapter().getInstance();
}

// Handler para Vercel (serverless)
export default async function handler(req: any, res: any) {
  try {
    console.log('Handler called:', req.method, req.url);
    
    if (!app) {
      console.log('Initializing NestJS app...');
      app = await bootstrap();
      console.log('NestJS app initialized successfully');
    }
    
    // Chamar o handler do Express diretamente
    app(req, res);
  } catch (error) {
    console.error('Error in handler:', error);
    console.error('Error name:', error instanceof Error ? error.name : 'Unknown');
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
    
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV !== 'production' && error instanceof Error ? error.stack : undefined
      });
    }
  }
}

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  bootstrap().then((server) => {
    const port = process.env.PORT || 3335;
    server.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
      console.log(`📚 Swagger available on http://localhost:${port}/`);
      console.log(`📚 Swagger also available on http://localhost:${port}/swagger`);
    });
  });
}
