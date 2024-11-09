import { Controller, Get, Query } from '@nestjs/common';

@Controller('assignment')
export class AssignmentController {

  // Function to check if a number is prime
  private isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Endpoint to check if a specific number is prime
  @Get('is-prime')
  checkPrime(@Query('number') number: number): object {
    return { isPrime: this.isPrime(number) };
  }

  // Endpoint to generate all prime numbers up to a given limit
  @Get('primes-up-to')
  generatePrimes(@Query('limit') limit: number): object {
    const primes: number[] = [];
    for (let i = 2; i <= limit; i++) {
      if (this.isPrime(i)) {
        primes.push(i);
      }
    }
    return { primes };
  }
}
