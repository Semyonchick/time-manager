import {NgModule} from "@angular/core";
import {Bx24Service} from "../shared/bx24.service";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "../+login/auth-guard.service";
import {ClientComponent} from "./client.component";
import {CommonModule} from "@angular/common";

const clientRoutes: Routes = [
    {path: 'clients', component: ClientComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forChild(clientRoutes),
        CommonModule,
    ],
    declarations: [
        ClientComponent,
    ],
    providers: [
        Bx24Service,
    ],
})

export class ClientModule {

}
