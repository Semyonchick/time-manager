import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
    {path: '', redirectTo: '/tasks', pathMatch: 'full'},
    // {path: 'clients', loadChildren: 'app/+client/client.module#ClientModule'},
    // {path: 'tasks', loadChildren: '/src/app/+task/task.module#TaskModule'},
];

export const routing = RouterModule.forRoot(routes);
