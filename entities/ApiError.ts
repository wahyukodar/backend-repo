export class ApiError extends Error {
    constructor(public status: number, public message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}
