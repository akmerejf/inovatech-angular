import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
	{path: '', component: MainComponent},
	{path: '**', component: MainComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
