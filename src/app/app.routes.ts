import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { EtlventasComponent } from './etlventas/etlventas.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'inicio',
        component: InicioComponent,
        children: [
            {
                path: 'procesoventas',
                component: EtlventasComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }

];
