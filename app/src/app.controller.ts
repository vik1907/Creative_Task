import { Controller, Get } from '@nestjs/common';
import { Counter, metric } from 'prom-client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/counter')
  getCounter(): Promise<metric[]> {
    return this.appService.getCounter();
  }
}
