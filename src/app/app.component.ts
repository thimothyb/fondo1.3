import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let colorArray = [
      'pink',
      'yellow',
      'blue',
      'green',
      'orange',
      'violet'
    ]

    const updateLinePosition = () => {
      gsap.fromTo('.speedLines line', {
        attr: {
          y1: 0,
          y2: 'random(20,200)'
        },
        x: 'random(0,600)',
        y: -200,
        stroke: gsap.utils.wrap(colorArray)
      }, {
        duration: 'random(0.8,2)',
        y: 600,
        ease: 'none',
        stagger: {
          each: 0.2,
        },
        onComplete: updateLinePosition 
      });
    }

    updateLinePosition(); 
  }
}



  

