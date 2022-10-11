import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter, register } from 'prom-client';

@Injectable()
export class AppService {
  constructor(@InjectMetric("vikrant205") public counter: Counter<string>) { }
  getHello(): string {
    return 'Hello World!';
  }
  getCounter() {
    this.counter.inc(1);
    return register.getMetricsAsJSON();
  }
}
