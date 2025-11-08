import { Injectable, Logger } from '@nestjs/common';

import { AppEnvironment } from '../../enums/app-environment';
import { DefaultConfiguration } from '../../enums/default-configuration';

@Injectable()
export class SecretService {
  private readonly loggerService = new Logger(SecretService.name);
  private readonly memoization: Map<string, string> = new Map();

  private fetchEnvVar(key: AppEnvironment): string | undefined {
    if (key in process.env) {
      return process.env[key];
    }

    return undefined;
  }

  private async getAndMemoizeSecret(key: AppEnvironment): Promise<string> {
    const keyReplace = key.replace(/_/g, '-');
    if (this.memoization.has(key)) {
      return this.memoization.get(key);
    }
    this.loggerService.warn(`Secret "${keyReplace}" not found in memoization`);
    return '';
  }

  private fetchDefaultEnvVar(key: AppEnvironment): string | undefined {
    return DefaultConfiguration[key];
  }

  async fetchEnvSecret(key: AppEnvironment): Promise<string> {
    this.loggerService.debug(`Fetching secret ${key}`);

    let secret = this.fetchEnvVar(key);

    if (typeof secret === 'undefined') {
      secret = this.fetchDefaultEnvVar(key);
    }

    if (typeof secret === 'undefined') {
      secret = await this.getAndMemoizeSecret(key);
    }

    if (typeof secret === 'undefined') {
      this.loggerService.warn(`${key} not resolved`);
      return '';
    }

    this.loggerService.debug(`${key} resolved`);
    return secret;
  }
}
