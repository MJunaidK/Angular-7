import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //Unless directive is opposite of ngif 

  //executed whenever the property changes
  //condition is the value we get as an input
    @Input() set appUnless(condition: boolean){
    if(!condition){
      // it creates a view in the viewcontainer and view is the templateRef
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
  
  //  our unless directive here in the end will sit on ng-template component because that is what gets transformed to by angle or if we use *
  //  First arg : So we need access to this template
  //  Second arg :   and we also need to get access to the place in the document where we want to render it. 
  //  so template is the what and View is where we should  render it.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
