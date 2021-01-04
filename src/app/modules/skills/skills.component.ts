import { Component, OnInit } from '@angular/core';

class Skill {
  title: string;
  path: string;

  constructor(title: string, path: string) {
    this.title = title;
    this.path = path;
  }
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: [
    './skills.component.scss'
  ]
})
export class SkillsComponent implements OnInit {
  public frontSkills: Array<Skill> = [
    new Skill('Angular', '/assets/img/logos/angular.png'),
    new Skill('VueJS', '/assets/img/logos/vue.png'),
    new Skill('Ionic', '/assets/img/logos/ionic.png'),
    new Skill('TypeScript', '/assets/img/logos/tscript.png'),
    new Skill('Sass', '/assets/img/logos/sass.png'),
    new Skill('Bootstrap', '/assets/img/logos/bootstrap.png'),
  ];
  public backSkills: Array<Skill> = [
    new Skill('NodeJS', '/assets/img/logos/nodejs.png'),
    new Skill('Postgresql', '/assets/img/logos/pgsql.png'),
    new Skill('Amazon Web Services', '/assets/img/logos/aws.png'),
    new Skill('Heroku', '/assets/img/logos/heroku.png'),
    new Skill('Django', '/assets/img/logos/django.png'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
