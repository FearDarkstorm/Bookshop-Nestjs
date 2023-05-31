import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class BookGuard implements CanActivate {
  public username: string = 'dark';
  public password: string = '1234';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const requestUsername = request.headers['username'];
    const requestPassword = request.headers['password'];

    if (requestUsername === this.username && requestPassword === this.password) {
      console.log('This is the book guard');
      return true;
    }

    return false;
  }
}
