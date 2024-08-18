import { Component, Input } from '@angular/core';
import { recentSubmissions } from "../../interface/LeetcodeDTO";
@Component({
  selector: 'app-leetcode-card',
  templateUrl: './leetcode-card.component.html',
  styleUrls: ['./leetcode-card.component.css']
})
export class LeetcodeCardComponent {
  @Input() leetcode_data !: recentSubmissions;
}
