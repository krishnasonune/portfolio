import { Component } from '@angular/core';
import { openTab } from '../classes/openurl';
import * as Aos from 'aos';
import { ClientService } from '../client/client.service';
import { LeetCodeStatsDTO } from '../interface/LeetcodeDTO';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  NewTab: openTab = new openTab();
  constructor(){}
  

  

  
  ngOnInit(): void {
    Aos.init({
      duration: 1000
    })

    
  }
}

