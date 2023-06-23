/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get } from '@nestjs/common';

@Controller('healthcheck')
export class HealthcheckController {
  constructor() {}

  @Get()
  public getHealth() {
    return 'Users service alive';
  }
}
