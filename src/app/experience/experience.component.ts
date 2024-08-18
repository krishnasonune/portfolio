import { Component } from '@angular/core';
import { experience } from '../interface/experience';
import * as Aos from 'aos';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  work_details : experience[] = [
    {
      url: "Birlasoft",
      company: "BirlaSoft",
      designation: "Technical Specialist",
      period: "Feb 2024 - till now",
      place: "Mumbai, India",
      description: "Currently experimenting with various technologies to enhance system efficiency by considering each usecase that fits best for the system, at the same time evaluting the current system to resolve bottleneck's & trying to come up with best ideas to make system more reliable by keeping up to its top performance",
      isSVG : true,
    },
    {
      url: "ZiSystech",
      company: "Zi Systech Pvt Ltd",
      designation: "Software Engineer",
      period: "Nov 2023 - Feb 2024",
      place: "Mumbai, India",
      description: "Worked on a single module by taking Techincal requirements from Product Team, Analysing those requirements and making Development plan for it, Implementing that feature from frontend to backend according to the plan and supported the deployment process & fixed few bugs along the way",
      isSVG : false,
    },
    {
      url: "Infosys",
      company: "Infosys Ltd",
      designation: "Software Developer",
      period: "Jul 2021 - Nov 2023",
      place: "Pune, India",
      description: "Learned new things & efficient ways of coding every day which make things work out, also keeping other important aspects in mind like proper planning of system design & implementing it in an efficient way as i am diving deep in to the complex softwares.",
      isSVG : true,
    }
  ];

  internship_details: experience[] = [
    {
      url: "furation",
      company: "Furation Tech",
      designation: "Software Developer",
      period: "Dec 2020 - Mar 2021",
      place: "Mumbai, India",
      description: "Created some crazy awesome websites from scratch, added cool animations & transistions, learned reusablility principle & some other important aspects of software engineering with super awesome team.",
      isSVG : true,
    }
  ]

  ngOnInit(): void{
    Aos.init({
      duration: 1000
    })
  }
}
