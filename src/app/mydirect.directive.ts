import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirect]'
})
export class MydirectDirective {

  constructor(private el:ElementRef) {  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.color='red'
  }
  @HostListener('mouseleave') onMouseLeavee(){
    this.el.nativeElement.style.color='blue'
  }


 

}
