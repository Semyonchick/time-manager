import {Component} from "@angular/core";
import {Bx24Service} from "../shared/bx24.service";
import {SubTask} from "../models/subTask";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './subtask.html',
    selector: 'sub-task',
})

export class SubTaskComponent {
    subTasks: SubTask[];
    params;

    constructor(private bxService: Bx24Service, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe((params)=> {
            if (params['task'] && this.params != params['task']) {
                this.params = params['task'];
                this.bxService.get('task.checklistitem.getlist', [this.params, {SORT_INDEX: 'ASC'}]).then((data: any) => {
                    this.subTasks = data.result;
                });
            }
        });

    }

    changeStatus(task) {
        console.log(task);
    }
}