import { Component, OnInit } from '@angular/core';
import { Projects } from "../interface/project";
import { openTab } from '../classes/openurl';
import * as Aos from 'aos';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent{
 
 github : string = "https://github.com/krishnasonune"; 
 NewTab : openTab = new openTab();
 projects : Projects[] = [
    {
      name : "JWT-based-Authentication",
      description: "🔥In this impressive project developed using ASP.NET Core, I have successfully showcased the implementation of a secure and efficient user authentication and authorization system using JSON Web Tokens (JWTs). The project not only demonstrates a fundamental understanding of web application security but also highlights my proficiency in using ASP.NET Core and related technologies.",
      url: "https://github.com/krishnasonune/JWT-based-Auth",
      technology: [
        "netframework",
        "csharp",
        "mssql"
      ]
    },

    {
      name : "MarvelFlix",
      description: "🍿It is a Video Streaming Webapp with only collection of marvel movies, built from scratch using angular, dotnet core and mssql server",
      url: "https://github.com/krishnasonune/MARVELFLIX/tree/frontend",
      technology: [
        "angularjs",
        "netframework",
        "csharp",
        "mssql",
        "Azure"
      ]
    },

    {
      name : "Android Voice Assistant",
      description: "🚀Created android Voice Assitant app that helps with day-to-day tasks like calling, opening Application & setting reminder for you",
      url: "https://github.com/krishnasonune/NavMusic-spotify-clone/tree/frontend",
      technology: [
        "java",
        "firebase",
        "studio"
      ]
    },

    {
      name : "E-Commerce Android App",
      description: "🛍️built E-commerce app for that allows them to sell their product directly to their customers without any third party",
      url: "https://github.com/krishnasonune/ecommerce-java-app",
      technology: [
        "java",
        "firebase",
        "studio"
      ]
    },

    {
      name : "Temp-Files-Automation",
      description: "🖥️Temp Files Automation is a console application built using csharp and dotnet that automates the process of deleting temp files from specified path/temp path from your local machine.",
      url: "https://github.com/krishnasonune/Temp-Files-Automation-Console-Application-",
      technology: [
        "csharp",
        "netframework"
      ]
    },

    {
      name : "Telegram Bot",
      description: "🤖Created a funny telegram bot with python that sends you unique jokes related to programming",
      url: "https://github.com/krishnasonune/telegram-jokify-bot",
      technology: [
        "python",
        "vscode",
        "heroku-logo"
      ]
    }
 ];

 ngOnInit(): void {
  Aos.init({
    duration: 1000
  });
}
}
