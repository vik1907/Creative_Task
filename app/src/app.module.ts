import { Module } from '@nestjs/common';
import {
  PrometheusModule,
  makeCounterProvider,
} from "@willsoto/nestjs-prometheus";
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrometheusModule.register({
    path: "/metrics",
  }),],
  controllers: [AppController],
  providers: [AppService,
    makeCounterProvider({
      name: "vikrant205",
      help: "vikrant205_help",
    }),],
})
export class AppModule { }
