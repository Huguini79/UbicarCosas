import { Component, OnInit } from '@angular/core'

@Component
({
    selector: 'app-see-things',
    templateUrl: 'seethings.html',
    styleUrl: '../app.css'
})

export class SeeThings {
    objetos: any[] = [];
    element: any = null;
    isSearching = false;
    ngOnInit()
    {
        this.cargarObjetos();
    }

    cargarObjetos()
    {
        let Objetos = JSON.parse(localStorage.getItem('objetos') ?? '[]');
        this.objetos = Objetos;
    }

    Eliminar(objeto: string)
    {
        this.objetos = this.objetos.filter(c => c != objeto);
        localStorage.setItem('objetos', JSON.stringify(this.objetos));
    }

    Busqueda(busqueda: string)
    {
        const encontrado = this.objetos.find(e => e.objeto_nombre.toLowerCase() === busqueda.trim().toLowerCase());
        if (encontrado)
        {
            this.element = encontrado;
            this.isSearching = true;

        } else
        {
            this.element = '';
            this.isSearching = true;
        }
    }
}