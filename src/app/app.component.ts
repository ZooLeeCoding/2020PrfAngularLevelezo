import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LevelezoFrontend';
  tomb = ['alma', 'körte', 'banán', 'ananász'];
  ujAru = '';

  aruFeltoltes() {
    if(this.ujAru !== '' && !(this.tomb.indexOf(this.ujAru) > -1)) {
      this.tomb.push(this.ujAru);
      this.ujAru = '';
    } else {
      this.title = 'Ilyen áru már van a tömbben';
    }
  }

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
