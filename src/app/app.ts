import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Menu } from './sections/menu/menu';
import { Gallery } from './sections/gallery/gallery';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero, Menu, Gallery, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('cafe-website');

  ngAfterViewInit() {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

  }
}
