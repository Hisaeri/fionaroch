import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

}
