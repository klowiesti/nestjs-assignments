import { Controller, Get, Query } from '@nestjs/common';

@Controller('assignment')
export class AssignmentController {

  // Function to calculate factorial of a number
  private factorial(num: number): number {
    if (num < 0) return -1; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // Endpoint to calculate the factorial of a specific number
  @Get('factorial')
  calculateFactorial(@Query('number') number: number): object {
    const result = this.factorial(number);
    if (result === -1) {
      return { error: "Factorial is not defined for negative numbers" };
    }
    return { factorial: result };
  }
}
