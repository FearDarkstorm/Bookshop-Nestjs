import { Injectable } from '@nestjs/common';

@Injectable()
export class Dynamicservice {
   getMessage(): string {
   return "here's your string"
   }
}