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
    isLoading: boolean;
    projectUrl = 'repos';
    constructor(
        private http: HttpService,
        private store: Store<AppStore>
    ) { 
        this.projects = store.select( store => store.projects );
    }

    loadProjects() {
        this.isLoading = true;
        return this.http.get(this.projectUrl)
                        .map((res: Response) => {
                            let body = res.json();
                            return body.data || {};
                        })
                        .map((payload: Project[]) => {
                            return { type: 'ADD_PROJECTS', payload };
                        })
                        .subscribe((action) => {
                            this.isLoading = false;
                            this.store.dispatch(action);
                        });
    }
}