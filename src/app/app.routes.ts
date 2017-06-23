import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {CadastroComponent} from './cadastro/cadastro.component';

const appRoutes: Routes = [
	{path: '', component: MainComponent},
	{path: 'login', component: LoginComponent},
	{path: 'cadastro', component: CadastroComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
