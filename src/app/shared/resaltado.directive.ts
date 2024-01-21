import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Establece el fondo y centrado
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'pink'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'display',
      'flex'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'align-items',
      'center'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'justify-content',
      'center'
    );
  }

}
