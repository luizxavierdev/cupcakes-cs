import { AppEnvironment } from '../enums/app-environment';

export const DefaultConfiguration = {
  [AppEnvironment.nodeEnv]: 'production',
  [AppEnvironment.dbLogging]: 'false',
  [AppEnvironment.serviceName]: 'pit-be',
  [AppEnvironment.serviceVersion]: '1.0.1',
  [AppEnvironment.serviceDescription]: 'Backend para ser utilizado no PIT',
};
