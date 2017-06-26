import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Project} from './_models/project';
import { ProjectService } from './project.service';

@Component({
    selector: 'projects',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProjectComponent implements OnInit, OnDestroy {

    // Redux based variables
    projects: Observable<Array<Project>>;

    private subscription: Subscription;

    constructor(
        private projectService: ProjectService
    ) { 
        this.projects = projectService.projects;
    }

    ngOnInit() { 
        this.subscription = this.projects
                    .subscribe(projects => {
                        // Do something with campaigns
                    }, error => {

                        // Do something with error
                    });

       this.projectService.loadProjects();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    loadNew() {
        this.projectService.loadProjects();
    }

}