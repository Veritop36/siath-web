export class ServerResponse<T> {
    private _success: boolean;
    private _message: string;
    private _data: T;


    constructor(success: boolean, message: string, data: T) {
        this._success = success;
        this._message = message;
        this._data = data;
    }

    get success(): boolean {
        return this._success;
    }

    get message(): string {
        return this._message;
    }

    get data(): T {
        return this._data;
    }
}