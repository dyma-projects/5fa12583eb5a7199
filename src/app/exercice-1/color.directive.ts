import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective {

  @Input('color') textColor = {up: 'red', right: 'blue', down: 'green', left: 'orange'};
  @HostBinding('style.color') color;

  constructor() { }

  @HostListener('window:keydown.arrowup', ['$event']) arrowUp($event) {
    this.color = this.textColor.up;
  }

  @HostListener('window:keydown.arrowright', ['$event']) arrowRight($event) {
    this.color = this.textColor.right;
  }

  @HostListener('window:keydown.arrowdown', ['$event']) arrowDown($event) {
    this.color = this.textColor.down;
  }

  @HostListener('window:keydown.arrowleft', ['$event']) arrowLeft($event) {
    this.color = this.textColor.left;
  }

}
