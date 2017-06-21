import {RouterModule, Routes} from '@angular/router';
import {ListaOcorrenciaComponent} from './lista-ocorrencia/lista-ocorrencia.component';
import {OcorrenciaComponent} from './ocorrencia/ocorrencia.component';
import {CadastroComponent} from './cadastro/cadastro.component';

const appRoutes: Routes = [
	{path: '', component: ListaOcorrenciaComponent},
	{path: 'nova_ocorrencia', component: CadastroComponent},
	{path: '**', component: ListaOcorrenciaComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
