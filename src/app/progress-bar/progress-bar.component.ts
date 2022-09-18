import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  styleUrls: ['./progress-bar.component.css'],
  template: `
  <div
    class="progress-bar-container"
    [style.backgroundColor]="backgroundColor"
  >
    <div
      class="progress"
      [style]="{
        backgroundColor: progressColor,
        width: progress + '%'
      }"
    ></div>
  </div>
`,
  styles: [
    `
    .progress-bar-container,
    .progress {
      height: 20px;
    }

    .progress-bar-container {
      width: 100%;
    }
  `,
  ],
})
export class ProgressBarComponent implements OnInit {
  private $backgroundColor = '';
  private $progressColor = '';
  private $progress = 0;
  @Input() backgroundColor: string;
  @Input()
  get progressColor() {
    return this.$progressColor;
  }
  set progressColor(value: string) {
    this.$progressColor = value;
  }

  @Input()
  get progress(): number {
    return this.$progress;
  }
  set progress(value: number) {
    // if (typeof value !== 'number') {
    //   this.$progress = 0;
    // } else {
    if (value > 100) {
      this.$progress = 10;
    } else {
      this.$progress = value;
    }
    // }
  }

  constructor() {}

  ngOnInit() {}
}
