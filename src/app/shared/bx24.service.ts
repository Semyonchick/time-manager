import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {AuthService} from "../+login/auth.service";


@Injectable()
export class Bx24Service {
    apiUrl: string;

    errors: any[] = window['errors'] ? window['errors'] : [];

    constructor(private http: Http, private authService: AuthService) {
        this.apiUrl = authService.getDomain();
    }

    url(method: string, params: any): string {
        params['auth'] = this.authService.getToken();
        return this.apiUrl + method + '.json?' + Bx24Service.build_query(params);
    }

    get(method: string, params: any) {
        // if(!this.authService.isLoggedIn) return false;
        return this.http.get(this.url(method, params))
            .toPromise()
            .then((res: any)=>res.json())
            .catch((error: Response) => {
                let info = error.json(),
                    data = {
                        code: error.status,
                        text: error.statusText + ' (' + error.status + '): ' + (info.error_description ? info.error_description : info.error),
                        response: error,
                    };
                this.errors.push(data);
                window['errors'] = this.errors;
                console.error(data.text);
            });
    }

    static build_query(obj: any, temp_key?: string): string {
        let output_string: string[] = [];
        Object.keys(obj).forEach(function (val) {
            let key = val;
            key = encodeURIComponent(key);
            temp_key ? key = temp_key + '[' + key + ']' : '';
            if (typeof obj[val] === 'object') {
                let query = Bx24Service.build_query(obj[val], key);
                output_string.push(query)
            } else {
                let value = encodeURIComponent(obj[val]);
                output_string.push(key + '=' + value)
            }
        });
        return output_string.join('&')

    }

}

