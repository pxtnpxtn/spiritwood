import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  ngOnInit(): void {
    const image = document.getElementsByClassName('parallax-splitter');
    new simpleParallax(image);
  }

  constructor() {}
}
