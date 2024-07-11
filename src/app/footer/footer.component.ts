import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  bubbles: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 128; i++) {
      this.bubbles.push({
        size: `${2 + Math.random() * 4}rem`,
        distance: `${6 + Math.random() * 4}rem`,
        position: `${-5 + Math.random() * 110}%`,
        time: `${2 + Math.random() * 2}s`,
        delay: `${-1 * (2 + Math.random() * 2)}s`
      });
    }
  }
}
