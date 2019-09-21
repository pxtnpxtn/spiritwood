import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const image = document.getElementsByClassName('parallax-splitter');
    new simpleParallax(image);
  }
}
