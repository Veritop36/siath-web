import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {FormControl, Validators} from "@angular/forms";
import {HttpService} from "../../core/http.service";

//const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService, HttpService]
})
export class LoginComponent {

    public login: string;
    public password: string;

    //public loginFormControl: FormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
    public loginFormControl = new FormControl('', [Validators.required]);
    public passwordFormControl = new FormControl('', [Validators.required]);

    public doLogin(): void {
        this.loginService.login(this.login, this.password, function () {
            console.log("Success desde el controlador");
        });

    }

    constructor(private loginService: LoginService) {
    }
}

