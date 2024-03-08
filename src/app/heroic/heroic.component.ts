import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { openTab } from "../classes/openurl";

@Component({
  selector: 'app-heroic',
  templateUrl: './heroic.component.html',
  styleUrls: ['./heroic.component.css']
})
export class HeroicComponent implements OnInit{
  animate_text : string[] = ['Software Developer', 'Competitive Programmer', 'Solution Architect'];
  isfwd : boolean = true;
  NewTab : openTab = new openTab();
  
  typeef() {
    var context = document.querySelector('.context')!;
    var i = 0;
    var j = 1;
    setInterval(() => {
      context.textContent = this.animate_text[i].substring(0, j);
      if (this.isfwd) {
        j++;
      }
      else {
        j--;
      }

      if (j > this.animate_text[i].length + 10) {
        this.isfwd = false;
      }

      if (j < 0) {
        this.isfwd = true;
        j = 1;
        i++;
      }

      if (i == this.animate_text.length) {
        i = 0;
      }
    }, 100)
  }

  animate(){
    var animate = document.querySelectorAll('.animate');
    const options = { root: null, rootMargin: '0px', threshold: 0.5 }; 
    var observer = new IntersectionObserver(enteries => {
      enteries.forEach( entry => {
        if(entry.isIntersecting){
          Aos.refresh();
        }
      })
    }, options);

    animate.forEach(div => {
      observer.observe(div);
    })
  }

  ngOnInit(): void {
    this.typeef();
    Aos.init({
      duration: 1300
    });
    this.animate();
  }
}
