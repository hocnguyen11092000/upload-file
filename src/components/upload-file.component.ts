import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  template: ` <app-upload-file-placeholder></app-upload-file-placeholder> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFile {}
