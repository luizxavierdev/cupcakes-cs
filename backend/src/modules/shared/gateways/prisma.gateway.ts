import { Inject, Injectable, OnModuleInit, Optional } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

import { AppEnvironment } from '../enums/app-environment';

@Injectable()
export class PrismaGateway extends PrismaClient implements OnModuleInit {
  constructor(
    @Optional() @Inject(AppEnvironment.dbHost) dbHost?: string,
    @Optional() @Inject(AppEnvironment.dbUser) dbUser?: string,
    @Optional() @Inject(AppEnvironment.dbPass) dbPass?: string,
    @Optional() @Inject(AppEnvironment.dbName) dbName?: string,
    @Optional() @Inject(AppEnvironment.dbLogging) dbLogging?: string,
  ) {
    // Prioridade: DATABASE_URL (Vercel Postgres) > variáveis separadas
    const databaseUrl = process.env.DATABASE_URL || process.env.PRISMA_DATABASE_URL;
    
    const datasourceUrl = databaseUrl 
      ? databaseUrl
      : `postgresql://${dbUser}:${dbPass}@${dbHost}:5432/${dbName}?schema=public`;

    super({
      datasourceUrl,
      log: dbLogging === 'true' ? ['query', 'info', 'warn', 'error'] : [],
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
