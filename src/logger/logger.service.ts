import { Injectable } from '@nestjs/common';
import { MessageFormatterService } from 'src/message-formatter/message-formatter.service';

@Injectable()
export class LoggerService {

    constructor(private messageFormatterService:  MessageFormatterService) {

    }

    log(params: any): string {
        const result = this.messageFormatterService.format(`${params} Hello world`);
        console.log(result);
        return result;
    }

}

