import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ArgumentMetadata } from '@nestjs/common';

export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value.id === 1) {
      return value;
    } else {
      throw new BadRequestException('Validation failed');
    }
  }
}
// it creates a custom pipe which checks if the input id is  1 or  not 
