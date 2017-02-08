import {Component, EventEmitter, Output, Input} from "@angular/core";

@Component({
    template: `<input type="file" (change)="uploadFiles($event.target.files)">`,
    selector: 'upload-file'
})

export class UploadFile {
    @Input() id: any;

    @Output() onUploadFile: EventEmitter<any> = new EventEmitter();

    constructor() {
        if (!this.id)this.id = 'fileUpload' + Math.round(Math.random() * 9999999)
    }

    uploadFiles(response) {
        // this.onUploadFile.emit(JSON.parse(response));
        // let element = Object.assign(new HTMLInputElement(), document.getElementById(this.id));
        // element.value = '';
        console.log(response);
    }
}