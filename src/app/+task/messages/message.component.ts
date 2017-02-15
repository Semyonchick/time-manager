import {Component, Input, Output, OnInit, EventEmitter} from "@angular/core";
import {Message} from "../../models/message";
import {SystemService} from "../../shared/system.service";
import {Bx24Service} from "../../shared/bx24.service";
import {User} from "../../models/user";

@Component({
    templateUrl: './message.html',
    selector: 'message'
})
export class MessageComponent implements OnInit {
    @Input() message: Message;
    @Input() taskID;

    deleted: boolean = false;
    user;
    currentUser;

    constructor(private system: SystemService, private bxService: Bx24Service) {

    }

    ngOnInit(): void {
        this.system.currentUser.then((data: User) => this.currentUser = data);
        this.system.users.then(users => {
            this.user = users.filter((user: User) => this.message.AUTHOR_ID == user.ID)[0];
        });
    }

    delete() {
        this.bxService.get('task.commentitem.delete', [this.taskID, this.message.ID]).then(() => this.deleted = true);
    }
}