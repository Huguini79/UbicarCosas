import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component
({
    selector: 'app-add-thing',
    imports: [ReactiveFormsModule],
    templateUrl: 'addthing.html',
    styleUrl: '../app.css'
})

export class AddThing 
{
    formulario = new FormGroup({
        nombre_objeto: new FormControl(''),
        lugar_objeto: new FormControl('')
    });

    Agregar()
    {
        let Objetos = JSON.parse(localStorage.getItem('objetos') ?? '[]');
        let nombre = this.formulario.get('nombre_objeto')?.value ?? '';
        let lugar = this.formulario.get('lugar_objeto')?.value ?? '';
        Objetos.push({objeto_nombre: nombre, objeto_lugar: lugar});
        localStorage.setItem('objetos', JSON.stringify(Objetos));
        this.formulario.reset();
    }
}