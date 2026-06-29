import { Component, OnInit } from '@angular/core'

@Component
({
    selector: 'app-see-things',
    templateUrl: 'seethings.html',
    styleUrl: '../app.css'
})

export class SeeThings {
    objetos = [];
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
}