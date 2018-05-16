import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  color = 'red';
  defaultColor = 'yellow';
  constructor() { }


  @HostBinding('style.backgroundColor') bg = this.defaultColor;
  @HostListener('mouseenter') changeColor(){
    console.log('mouse enter');
    this.bg = this.color;
  }
  @HostListener('mouseout') modifyColor(){
    console.log('mouse out');
    this.bg = this.defaultColor;
  }
}
