import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  About_animate(){
    var d = document.querySelectorAll('.aboutimgtrans');
    const options = { root: null, rootMargin: '0px', threshold: 0 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        if (entry.isIntersecting) {
          let element = entry.target as HTMLElement;
          element.style.animation = 'aboutFromLeft 2s ease-in-out normal';
        }
      })
    }, options);

    d.forEach(div => {
      observer.observe(div);
    })
  }

  About_animate2(){
    var d = document.querySelectorAll('.aboutdesctrans');
    const options = { root: null, rootMargin: '0px', threshold: 0 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        if (entry.isIntersecting) {
          let element = entry.target as HTMLElement;
          element.style.animation = 'aboutFromRight 2s ease-in-out normal';
        }
      })
    }, options);

    d.forEach(div => {
      observer.observe(div);
    })
  }

  ngOnInit(): void {
    this.About_animate();
    this.About_animate2();
  }

}
