import {Component, OnInit} from "@angular/core";
import {Bx24Service} from "../shared/bx24.service";

@Component({
    // template: require('./client.html'),
    templateUrl: './client.html',
})

export class ClientComponent implements OnInit {
    clients;

    constructor(private service: Bx24Service){

    }

    ngOnInit(): void {
        this.clients = this.service.get('crm.company.list', {order:{DATE_CREATE:'DESC'}}).then((data: any) => {
            console.log(data.result);
            return data.result;
        });
    }

}