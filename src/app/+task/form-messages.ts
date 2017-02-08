import {Component, Output} from "@angular/core";
@Component({
    templateUrl: './form-messages.html',
    selector: 'form-messages',
})

export class FormMessagesComponent {
    @Output() messages;

    constructor() {

    }
}