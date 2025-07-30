import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageFormatterService {

    format(message: string) : string {

        const now = new Date();
        const pad = (n: number) => n.toString().padStart(2, '0');
      
        const year = now.getFullYear();
        const month = pad(now.getMonth() + 1); // Month is zero-based
        const day = pad(now.getDate());
      
        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        const seconds = pad(now.getSeconds());
      
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}  -  ${message}`; 

    }

}
