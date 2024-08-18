import { Component } from '@angular/core';
import { testinomial } from '../interface/testinomial';
import * as Aos from "aos";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  selectedProject : any = {
    title: "",
    desc: ""
  }
  isOpen : boolean = false;
  testinomials : testinomial[] = [
    {
      tagline : "Fast & Efficient",
      experience: "I'm thoroughly impressed with Krishna's expertise and commitment. he crafted an app that not only meets our requirements but also sets new standards for functionality and design. A dedicated professional who turned our app idea into a stunning reality.",
      image : "avatar",
      name: "Ram Sonune",
      role: "Product Owner"
    },
    {
      tagline : "Man Of Words",
      experience: "I had the chance to work with Krishna few times on various projects for the web/mobile applications. What I liked is his swiftness and the great quality of the application that will always get you that 'wow' effect.",
      image : "avatar",
      name: "Susmit Vengurlekar",
      role: "Product Owner"
    },
    {
      tagline : "Awesome Experience",
      experience: "Krishna provided an exceptional service experience - from his technical prowess that brought our vision to life, to his prompt and clear communication that made the process seamless. his dedication to excellence truly shines through in every aspect of his work. A web developer par excellence!",
      image : "avatar",
      name: "Dhiraj Tembulkar",
      role: "Product Owner"
    },
    {
      tagline : "Creative",
      experience: "Working with Krishna has been an absolute pleasure. His proficiency in Android development is evident in the smooth and user-friendly app he created for us. Timely delivery, creative problem-solving, and a fantastic end product -truly excels",
      image : "avatar",
      name: "Prathamesh Nimbalkar",
      role: "Product Owner"
    },
    {
      tagline : "Dedication",
      experience: "Collaborating with Krishna on our AWS services was a fantastic experience. As a Cloud Architect, I appreciated Krishna’s clear guidance and knowledge of AWS, which made integrating services like EC2, SQS, SNS, S3, DynamoDB etc. smoothly and efficiently. Their ability to simplify complex concepts and address our technical challenges was invaluable.",
      image : "avatar",
      name: "Hardik Pawar",
      role: "Cloud Architect"
    },
    {
      tagline : "Up To The Mark",
      experience: "From requirement analysis to deployment, Krishna’s technical expertise shines through in his ability to tackle obstacles and devise effective solutions. His adeptness at root cause analysis is evident in his methodical approach to problem-solving and his skill in addressing complex challenges.",
      image : "avatar",
      name: "Nishant Kharat",
      role: "Service Now Specialist"
    }
  ];

  onProjectCardClick(testinomial: testinomial){
    this.selectedProject.title = testinomial.name;
    this.selectedProject.desc = `${testinomial.tagline} : - ${testinomial.experience}`
    this.isOpen = !this.isOpen
  }

  close(event : boolean){
    if (event) {
      this.isOpen = !this.isOpen;
    }
  }

  ngOnInit(): void{
    Aos.init({
      duration: 1000
    })
  }

}
