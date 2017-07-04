import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {HomeProjectComponent} from './projetos/home_project.component';
import {FeedprojetoComponent} from './feedprojeto/feedprojeto.component';

const appRoutes: Routes = [
	{path: '', component: MainComponent},
	{path: 'login', component: LoginComponent},
	{path: 'cadastro', component: CadastroComponent},
	{path: 'projetos', component: HomeProjectComponent},
	{path: 'feedprojeto', component: FeedprojetoComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
