export default class HttpException extends Error {
  message: string;
  error: string | null;
  statusCode?: number;
  status?: number;

  constructor(statusCode: number, message: string, error?: string) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error || null;
  }
}
