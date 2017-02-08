import {Component, Input, Output, OnInit, EventEmitter} from "@angular/core";
import {Message} from "../models/message";
import {Bx24Service} from "../shared/bx24.service";
import {User} from "../models/user";
import {SystemService} from "../shared/system.service";

@Component({
    templateUrl: './message.html',
    selector: 'message'
})
export class MessageItem implements OnInit {
    @Input() message: Message;

    @Output() onChange: EventEmitter<any> = new EventEmitter();

    user;
    currentUser;

    constructor(private system: SystemService, private bxService: Bx24Service) {

    }

    ngOnInit(): void {
        this.system.currentUser.then((data: User) => this.currentUser = data);
        this.system.users.then(users=> {
            this.user = users.filter((user: User)=>this.message.AUTHOR_ID == user.ID)[0];
        });
    }

    edit() {
        this.onChange.emit(this.message);
    }
}