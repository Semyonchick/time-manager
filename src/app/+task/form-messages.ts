import {Component, Output, OnInit, EventEmitter, Input} from "@angular/core";
import {Message} from "../models/message";
import {Bx24Service} from "../shared/bx24.service";
@Component({
    templateUrl: 'form-messages.html',
    selector: 'form-messages',
})

export class FormMessagesComponent implements OnInit {
    @Input() message: Message;
    @Input() taskID: number|string;

    @Output() onSubmit: EventEmitter<any> = new EventEmitter();

    constructor(private bxService: Bx24Service) {
    }

    ngOnInit() {
        this.initModel();
    }

    initModel() {
        this.message = this.message ? this.message : Object.assign({}, new Message());
    }

    save() {
        this.bxService.get('task.commentitem.add', [this.taskID, this.message]);
        this.message = Object.assign({}, new Message());
    }
}