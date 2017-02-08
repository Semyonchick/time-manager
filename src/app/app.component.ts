import {Component} from "@angular/core";
import "../style/app.scss";
import {AuthService} from "./+login/auth.service";

@Component({
    selector: 'my-app', // <my-app></my-app>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title: string = 'Time Manager';

    constructor(private auth: AuthService) {
    }

}
