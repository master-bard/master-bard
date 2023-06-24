import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { HttpErrorType } from './http-error-type';
import { Response } from 'express';
import { ErrorType } from '@master-bard/api/enums';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = +exception.getStatus();

        // eslint-disable-next-line prefer-const
        let { errorType, message } = exception.getResponse() as {
            errorType: ErrorType | string;
            message: string | string[];
        };

        if (!errorType) {
            errorType = HttpErrorType[status as keyof typeof HttpErrorType] ?? 'UNEXPECTED_ERROR';
        }

        response
            .status(status)
            .json({
                errorType,
                message,
                timestamp: new Date().getTime(),
            });
    }
}
