import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { AppConfig, appConfig } from './config/app.config';
import { TypedConfigService } from './config/typed-config.service';

@Injectable()
export class AppService {

      constructor(private loggerService:  LoggerService,
        private readonly configService: TypedConfigService
      ) {
  
      }
  getHello(): string {
    const prefix = this.configService.get<AppConfig>('app')?.messagePrefix;
    return this.loggerService.log(prefix);
  }
}
