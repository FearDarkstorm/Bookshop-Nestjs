import { Controller, Get } from '@nestjs/common';
import { Dynamicservice } from './dynamicModule.controller';

@Controller('dynamic')
export class DynamicController {
  constructor(private readonly dynamics: Dynamicservice) {}

  @Get()
  getMessage(): string {
    return this.dynamics.getMessage();
  }
}