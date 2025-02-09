import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonEffect]',
  standalone: true,
})
export class ButtonEffectDirective {

  @Input('buttonEffect') defaultBgColor: string = '#821328';
  @Input() hoverBgColor: string = 'rgb(187,59,76)';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultBgColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.hoverBgColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultBgColor);
  }

}
