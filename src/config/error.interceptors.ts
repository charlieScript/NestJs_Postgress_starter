import {
  Injectable,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
  UnauthorizedException,
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof TokenExpiredError)
          return throwError(new UnauthorizedException(err));

        if (err instanceof HttpException) return throwError(err);

        return throwError(new InternalServerErrorException(err));
      }),
    );
  }
}