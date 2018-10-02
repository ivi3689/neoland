import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[rojo]'
})
export class ColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
  	el.nativeElement.style.color = 'red'
  }

  @HostListener('mouseover') onMouseOver(){
  	this.renderer.setElementStyle(this.el.nativeElement, 'color', 'blue ')
  }
  @HostListener('mouseout') onMouseOut(){
  	this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red')}

}
