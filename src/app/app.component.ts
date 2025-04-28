import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  descargarAPK() {
    const link = document.createElement('a');
    link.href = 'img/TecniFind.apk'; // Cambia esto por la URL real
    link.download = 'TecniFind.apk'; // Nombre con el que se guardará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }  
} 