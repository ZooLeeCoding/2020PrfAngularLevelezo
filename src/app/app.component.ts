import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LevelezoFrontend';
  tomb = ['alma', 'körte', 'banán', 'ananász'];

  logConsole() {
    console.log('kattintottak a gombon');
    if(this.title === 'LevelezoFrontend') {
      this.title = 'Gombnyomás';
    } else {
      this.title = 'LevelezoFrontend';
    }
  }

  listClick(t: string) {
    console.log('volt egy kattintás', t);
  } 
}
