import { Component } from '@angular/core';
import { testinomial } from '../interface/testinomial';
import * as Aos from "aos";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  testinomials : testinomial[] = [
    {
      tagline : "Fast & Efficient",
      experience: "I'm thoroughly impressed with K's expertise and commitment. he crafted an app that not only meets our requirements but also sets new standards for functionality and design. A dedicated professional who turned our app idea into a stunning reality.",
      image : "avatar",
      name: "Ram Sonune",
      role: "Product Owner"
    },
    {
      tagline : "Man Of Words",
      experience: "I had the chance to work with K few times on various projects for the web/mobile applications. What I liked is his swiftness and the great quality of the application that will always get you that 'wow' effect.",
      image : "avatar",
      name: "Susmit Vengurlekar",
      role: "Product Owner"
    },
    {
      tagline : "Awesome Experience",
      experience: "K provided an exceptional service experience - from his technical prowess that brought our vision to life, to his prompt and clear communication that made the process seamless. his dedication to excellence truly shines through in every aspect of his work. A web developer par excellence!",
      image : "avatar",
      name: "Dhiraj Tembulkar",
      role: "Product Owner"
    },
    {
      tagline : "Creative",
      experience: "Working with K has been an absolute pleasure. His proficiency in Android development is evident in the smooth and user-friendly app he created for us. Timely delivery, creative problem-solving, and a fantastic end product -truly excels",
      image : "avatar",
      name: "Prathamesh Nimbalkar",
      role: "Product Owner"
    }
  ];

  ngOnInit(): void{
    Aos.init({
      duration: 1000
    })
  }

}
