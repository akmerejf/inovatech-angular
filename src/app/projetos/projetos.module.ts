import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectCountComponent } from './count.component';
import { ProjectService } from './project.service';
import { projects } from './_reducers/project.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShortTitlePipe } from './short-title.pipe';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({
      projects
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension() 
  ],
  exports: [
  	ProjectComponent,
  	ProjectCountComponent
  ],
  declarations: [
  	ProjectComponent,
    ProjectCountComponent,
    ShortTitlePipe
  ],
  providers: [
  	 ProjectService
  ]
})
export class ProjetosModule { }
