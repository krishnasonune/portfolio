import { Component } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})

export class SplashComponent{
  logo : string = `< KrishnaSonune />`;
  showSplash : boolean = true;
  
  textanim(){
    var d = document.getElementById("text") as HTMLElement;
    d.classList.toggle('vis');
  }

  animated(){
    var s = document.getElementById("anim") as HTMLDivElement;
    s.classList.toggle('remove')
  }
 
  ngOnInit() : void{

    setTimeout(() => {
      this.textanim()
    }, 1200);


    setTimeout(() => {
      this.animated();
      setTimeout(() => {
        this.showSplash = false;
      }, 2000);
    }, 3000);
  }
}
