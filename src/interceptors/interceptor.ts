import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Header } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class GeneralInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    //console.log("GeneralInterceptor ****************************");

    return next
      .handle()
      .pipe(
        tap(() => {
          // request.res.header('x-api-key', 'Pretty secure');
          // console.log(`yes...`)
        })
      );
  }
}


