import { Catch, ArgumentsHost, Inject, HttpServer, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;

        const message = (exception instanceof Error) ? exception.message : exception.message.error;

        if (exception.status === HttpStatus.NOT_FOUND) {
            status = HttpStatus.NOT_FOUND;
        }

        if (exception.status === HttpStatus.SERVICE_UNAVAILABLE) {
            status = HttpStatus.SERVICE_UNAVAILABLE;
        }

        if (exception.status === HttpStatus.NOT_ACCEPTABLE) {
            status = HttpStatus.NOT_ACCEPTABLE;
        }

        if (exception.status === HttpStatus.EXPECTATION_FAILED) {
            status = HttpStatus.EXPECTATION_FAILED;
        }

        if (exception.status === HttpStatus.BAD_REQUEST) {
            status = HttpStatus.BAD_REQUEST;
        }

        if (exception.status === HttpStatus.UNAUTHORIZED) {
            status = HttpStatus.UNAUTHORIZED;
        }

        response
            .status(status)
            .json({
                status,
                success: false,
                error: message,
                message: (status === HttpStatus.INTERNAL_SERVER_ERROR) ? 'It looks like something went wrong...' : ''
            });
    }
}