import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World New Docker Image demo wat je zelf invult';
  }
}
