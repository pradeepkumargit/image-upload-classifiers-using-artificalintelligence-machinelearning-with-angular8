import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageClassfierUploadComponent } from './image-classfier-upload/image-classfier-upload.component';
import { ImageClassifierWebcamComponent } from './image-classifier-webcam/image-classifier-webcam.component';

const routes: Routes = [
  { path: 'upload', component: ImageClassfierUploadComponent },
  { path: 'webcam', component: ImageClassifierWebcamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
