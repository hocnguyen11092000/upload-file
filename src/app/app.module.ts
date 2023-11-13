import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFile } from 'src/components/upload-file.component';
import { UploadFilePlaceHolder } from 'src/components/upload-placeholder.component';

@NgModule({
  declarations: [AppComponent, UploadFile, UploadFilePlaceHolder],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
