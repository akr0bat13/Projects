import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDerective {
  @Input('appStyle') color: string = 'blue';
  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setStyle(el.nativeElement, 'color', 'red');
  }
  @HostListener('click', ['$event']) onClick(event: Event) {}
}
