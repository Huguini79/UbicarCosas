import { Routes } from '@angular/router';
import { Home } from './home/home.component'
import { AddThing } from './things/addthing.component'
import { SeeThings } from './things/seethings.component'
import { Error } from './404/404'

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: Home,
        title: 'Inicio - UbicarCosas'
    },
    {
        path: 'agregar-objeto',
        component: AddThing,
        title: 'Agregar Objeto - UbicarCosas'
    },
    {
        path: 'ver-objetos',
        component: SeeThings,
        title: 'Ver Cosas - UbicarCosas'
    },
    {
        path: '**',
        component: Error,
        title: 'Error 404 - UbicarCosas'
    }
];
