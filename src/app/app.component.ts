import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){}
  
  title = 'portfolio';
  linkedin = 'https://in.linkedin.com/in/krishna-sonune-1421b21b5';
  facebook = 'https://www.facebook.com/krishnasonune1999';
  instagram = 'https://www.instagram.com/krishna_sonune/';
  gmail = 'mailto:krishnasonune87@gmail.com';
  github = 'https://github.com/krishnasonune';
  hackerrank = 'https://www.hackerrank.com/krishnasonune87';
  
  work(){
    let ul = document.getElementById("ul") as HTMLUListElement;
    let hammenu = (document.getElementById("menu") as HTMLSpanElement);
    ul.classList.toggle('show');
    if(hammenu.innerText == 'menu'){
      hammenu.innerText = 'close';
    }
    else if(hammenu.innerText == 'close'){
      hammenu.innerText = 'menu';
    }
  }

  fbox1(){
    var d = document.querySelectorAll('.fbAnimate1');
    const options = { root: null, rootMargin: '0px', threshold: 0 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        if(entry.isIntersecting){
          let element = entry.target as HTMLElement;
          element.style.animation = 'fade-left 1.2s ease-in-out normal';
        }
      })
    }, options);

    d.forEach(div => {
      observer.observe(div);
    })
  }

  fbox2(){
    var d = document.querySelectorAll('.fbAnimate2');
    const options = { root: null, rootMargin: '0px', threshold: 0 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        if(entry.isIntersecting){
          let element = entry.target as HTMLElement;
          element.style.animation = 'fade-right 1.2s ease-in-out normal';
        }
      })
    }, options);

    d.forEach(div => {
      observer.observe(div);
    })
  }
  
  ngOnInit() {
    this.fbox1();
    this.fbox2();
  }
  
}
