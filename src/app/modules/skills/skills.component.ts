import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: [
    './skills.component.scss'
  ]
})
export class SkillsComponent implements OnInit {
  public frontSkills: Array<string> = ['angular', 'tscript', 'vue', 'sass', 'bootstrap'];
  public backSkills: Array<string> = ['nodejs', 'pgsql', 'aws', 'heroku', 'django'];
  constructor() { }

  ngOnInit(): void {
  }

}
