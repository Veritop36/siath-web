import {Injectable} from "@angular/core";
import {backendServerUrl} from "../../app.constants";
import {ServerResponse} from "../../model/core/server-response";
import {HttpService} from "../../core/http.service";
import {LoginView} from "../../model/main/login-view";


@Injectable()
export class LoginService {



    constructor(private  httpService: HttpService) {
    }

    public login(username: string, password: string, callback: () => void): void {
        let postData = {
            username: username,
            password: password
        };
        const url = backendServerUrl + '/users/login';
        const success: (data: ServerResponse<LoginView>) => void = function (data) {
            console.log(data.data.token);
        };

        this.httpService.post(url, postData, success);
    }
}
