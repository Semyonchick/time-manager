/**
 * Created by semyonchick on 21.07.2016.
 */
import {Component, ElementRef, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
    templateUrl: './login.html',
    styles: [
        'label, span {line-height: 40px}',
        'label, span {font-size: 16px}',
        'label {text-align: right}',
    ]
})

export class LoginComponent {
    @ViewChild('iframe') iframe: ElementRef;

    domain: string = 'rere';
    token: string;
    step: number = 1;

    message: string;
    form: boolean = true;

    // private error: boolean = false;

    constructor(public authService: AuthService, public router: Router) {
        if (authService.isLoggedIn) this.redirect();
    }

    login() {
        if (!this.token) {
            this.step = 2;
            this.iframe.nativeElement.setAttribute('src', this.authService.go(this.domain));
            this.iframe.nativeElement.style = {display: 'block'};
        } else {
            this.authService.login(this.domain, this.token.toString());
            this.redirect();
        }
        return false;
    }

    redirect() {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        this.router.navigate([redirect]);

    }
}
