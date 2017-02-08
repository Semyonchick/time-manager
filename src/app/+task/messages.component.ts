import {Component} from "@angular/core";
import {Bx24Service} from "../shared/bx24.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './messages.html',
    selector: 'messages'
})

export class MessagesComponent {
    messages: any;
    params;

    constructor(private bxService: Bx24Service, private route: ActivatedRoute) {

    }

    ngOnInit() {
        //следит за изменением route
        this.route.params.subscribe((params)=> {
            if (params['task'] && this.params != params['task']) {
                this.params = params['task'];
                //получение комментариев

                this.bxService.get('task.commentitem.getlist', [this.params, {ID: 'ASC'}]).then((data: any) => {
                    this.messages = data.result;
                });
            }
        })
    }
}