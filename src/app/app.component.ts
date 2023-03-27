import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day36';

  constructor(private router: Router) { }

  gotoElephant() {
    console.log(">>> going to elephant")
    this.router.navigate(['/elephant'])
  }

}
