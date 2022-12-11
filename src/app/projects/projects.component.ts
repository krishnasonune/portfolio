import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  
  animate(){
    var d = document.querySelectorAll('.projimgtrans');
    const options = { root: null, rootMargin: '0px', threshold: 0 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        console.log(entry);
        if(entry.isIntersecting){
          let element = entry.target as HTMLElement;
          element.style.animation = 'objFromLeft 2s ease-in-out normal';
        }
      })
    }, options);

    d.forEach(div => {
      observer.observe(div);
    })
  }

  animate2(){
    var d = document.querySelectorAll('.projdesctrans');
    const options = { root: null, rootMargin: '0px', threshold: 0 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        if(entry.isIntersecting){
          let element = entry.target as HTMLElement;
          element.style.animation = 'objFromRight 2s ease-in-out normal';
        }
      })
    }, options);

    d.forEach(div => {
      observer.observe(div);
    })
  }
  
  ngOnInit() {
    this.animate();
    this.animate2();
 }

}
