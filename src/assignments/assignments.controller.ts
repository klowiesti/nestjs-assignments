import { Controller, Get, Query } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci')
  getFibonacci(@Query('n') n: number): number[] {
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.slice(0, n);
  }
}
