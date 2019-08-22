import { Component, AfterViewInit } from '@angular/core';
import { ElementRef} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title: string;
  
  constructor(private router: Router){
    this.title="FrontEnd for Esport Application"
  }
  changeLol(): void {
    this.router.navigateByUrl('/matches');
  }
  
}
