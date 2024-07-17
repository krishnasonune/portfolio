import { Component } from '@angular/core';
import { openTab } from "../classes/openurl";
import { education } from '../interface/education';
import { certification } from '../interface/certification';
import * as Aos from 'aos';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  NewTab : openTab = new openTab();
  degrees : education[] = [
    {
      degree_from : "University Of Mumbai, India",
      degree_title : "Master's in Computer Application",
      degree_period : "2022-2024",
      degree_description : [
        "Studied Advanced Web concepts like client-server side Architecture using Dot net Core",
        "Learned Advanced Database Management Systems using SQL Server, MongoDB & Postgres",
        "Learned Software development life cycle and Agile methodologies,        Requirements analysis and project management, debugging, and quality assurance.",

      ]
    },

    {
      degree_from : "University Of Mumbai, India",
      degree_title : "B.Sc in Information Technology",
      degree_period : "2018-2021",
      degree_description : [
        "Learned basic fundamentals of Software Engineering & programming languages like C, C++, Java, etc.",
        "Learned Problem-solving skills & DSA concepts like Stacks, Queues, Linked List, Trees, etc.",
        "Learned Ubuntu OS (Linux based operating system)",
        "Full Stack Android Application Development using Java & Firebase",
      ]
    }
  ];

  certifications: certification[] = [
    {
      url: "Infosys",
      subject: "C# Certified Develoepr",
      source: "Infosys Ltd"
    },

    {
      url: "Infosys",
      subject: "Angular Certified Develoepr",
      source: "Infosys Ltd"
    },

    {
      url: "Infosys",
      subject: "Global Agile Develoepr",
      source: "Infosys Ltd"
    },

    {
      url: "hackerrank",
      subject: "Problem Solving Skills",
      source: "HackerRank"
    },

    {
      url: "hackerrank",
      subject: "C# Certified Developer",
      source: "HackerRank"
    },

    {
      url: "hackerrank",
      subject: "SQL Developer",
      source: "HackerRank"
    }
  ]

  ngOnInit(): void{
    Aos.init({
      duration: 1000
    })
  }
}

