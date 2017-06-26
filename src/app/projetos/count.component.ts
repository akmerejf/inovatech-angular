import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from './_models/project';
import { ProjectService } from './project.service';

@Component({
    selector: 'project-count',
    templateUrl: 'count.component.html'
})
export class ProjectCountComponent implements OnInit {

    // Redux based variables
    projects: Observable<Array<Project>>;

    constructor(
        private projectService: ProjectService
    ) { 
        this.projects = projectService.projects;
    }


    ngOnInit() { }
}