import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[blink]'
})
export class BlinkDirective {

  constructor(el: ElementRef, renderer: Renderer) { 
  	let visible = true
	setInterval(() =>{
		if(visible){
			//el.nativeElement.style.opacity = 0
			renderer.setElementStyle(el.nativeElement, 'opacity', '0')
			visible = false
		} else {
			//el.nativeElement.style.opacity = 1
			renderer.setElementStyle(el.nativeElement, 'opacity', '1')
			visible = true
		}

	},700) 

	
  }

}
