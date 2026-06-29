import { Component, signal } from '@angular/core';
import { Menu } from './menu/menu.component'

@Component({
  selector: 'app-root',
  imports: [Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UbicarCosas');
}