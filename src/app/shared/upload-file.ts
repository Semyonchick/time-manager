import {Component, EventEmitter, Output, Input} from "@angular/core";

@Component({
    template: `<input type="file" [id]="id" (change)="uploadFiles($event.target)">`,
    selector: 'upload-file'
})

export class UploadFile {
    @Input() id: any;

    // @Output() onUploadFile: EventEmitter<any> = new EventEmitter();

    constructor() {
        if (!this.id) this.id = 'fileUpload' + Math.round(Math.random() * 9999999)
    }

    uploadFiles(response) {
        // element.value = '';/
        // this.onUploadFile.emit(response.files ? response.files : {});
    }
}

