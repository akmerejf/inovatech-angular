import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Project } from './_models/project';

import { HttpService } from '../http.service';

import { AppStore } from '../app.store';

@Injectable()
export class ProjectService {

    // Redux based variables
    projects: Observable<Array<Project>>;

    projectUrl = 'project';

    constructor(
        private http: HttpService,
        private store: Store<AppStore>
    ) { 
        this.projects = store.select( store => store.projects );
    }

    loadProjects() {
        return this.http.get(this.projectUrl)
                        .map((res: Response) => {
                            let body = res.json();
                            return body.data || {};
                        })
                        .map((payload: Project[]) => {
                            return { type: 'ADD_PROJECTS', payload };
                        })
                        .subscribe((action) => {
                            this.store.dispatch(action);
                        });
    }
}