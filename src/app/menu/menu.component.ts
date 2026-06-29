import { Component } from '@angular/core'
import { RouterOutlet, RouterLink } from '@angular/router'

@Component
({
    selector: 'app-menu',
    imports: [RouterOutlet, RouterLink],
    templateUrl: 'menu.html',
    styleUrl: '../app.css'
})

export class Menu {}