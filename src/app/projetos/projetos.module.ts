import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProjectComponent } from './home_project.component';
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
  	HomeProjectComponent,
  	ProjectCountComponent
  ],
  declarations: [
  	HomeProjectComponent,
    ProjectCountComponent,
    ShortTitlePipe
  ],
  providers: [
  	 ProjectService
  ]
})
export class ProjetosModule { }
