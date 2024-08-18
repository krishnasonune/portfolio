import { Component } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent {
  logo : string = "< KrishnaSonune />"

  toggle(){
    var nav = document.querySelector('.navbar') as HTMLDivElement;
    nav.classList.toggle('nav-open');
  }
}
