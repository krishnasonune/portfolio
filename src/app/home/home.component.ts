import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  marvelflix = 'https://github.com/krishnasonune/MARVELFLIX/tree/frontend';
  marvelspot = 'https://github.com/krishnasonune/marvelSpot';
  navmusic = 'https://github.com/krishnasonune/NavMusic-spotify-clone/tree/frontend';

  Home_animate(){
    var d = document.querySelectorAll('.cardtrans');
    const options = { root: null, rootMargin: '0px', threshold: 0 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        if(entry.isIntersecting){
          let element = entry.target as HTMLElement;
          element.style.animation = 'cardFromRight 2s ease-in-out normal'
        }
      })
    }, options);

    d.forEach(div => {
      observer.observe(div);
    })
  }

  ngOnInit(){
    this.Home_animate();
  }

}
