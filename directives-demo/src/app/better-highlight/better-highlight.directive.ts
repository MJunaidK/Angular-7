import { Directive, Renderer2, OnInit,ElementRef, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
 // @Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

  constructor(private elRef:ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor= this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor= this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor= this.defaultColor ;
  }

  @HostListener('click') click(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }

}
