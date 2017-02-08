import {Component, Input} from "@angular/core";

@Component({
    templateUrl: './messages-list.html',
    selector: 'messages-list'
})
export class MessagesList {
    @Input() messagesList;
    constructor() {

    }


}