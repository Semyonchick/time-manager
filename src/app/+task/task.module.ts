import {NgModule} from "@angular/core";
import {ShareModule} from "../shared/share.module";
import {TaskComponent} from "./task.component";
import {TaskListComponent} from "./task-list.component";
import {TaskDetailComponent} from "./task-detail.component";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "../+login/auth-guard.service";
import {AuditorsComponent} from "./auditors.component";
import {SubTaskComponent} from "./subtask.component";
import {MessagesComponent} from "./messages.component";
import {FormMessagesComponent} from "./form-messages";
import {MessageComponent} from "./message.component";

const taskRoutes: Routes = [
    {path: 'tasks', component: TaskComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forChild(taskRoutes),
        ShareModule,
    ],
    declarations: [
        TaskComponent,
        TaskListComponent,
        TaskDetailComponent,
        AuditorsComponent,
        SubTaskComponent,
        MessagesComponent,
        FormMessagesComponent,
        MessageComponent,
    ],
    providers: [
    ],
})

export class TaskModule {

}
