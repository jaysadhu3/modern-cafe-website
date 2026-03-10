import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Menu } from './sections/menu/menu';
import { Gallery } from './sections/gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero, Menu, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cafe-website');
}
