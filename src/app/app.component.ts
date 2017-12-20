import { Component, ViewChild, ElementRef, AfterViewInit, trigger } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OV Shop';
  isClosed = false;

  hideElement = true;
  triggerClass = 'hamburger is-closed';
  sidebarBaseClass = 'navbar navbar-inverse navbar-fixed-top';
  wrapperClass = 'page-content-wrapper-no-padding';

  sidebarClass = this.sidebarBaseClass + ' sidebar-no-width';
  @ViewChild('overlay') overlay: ElementRef;
  @ViewChild('hamburger') trigger: ElementRef;

  

  menuClickEvent(event) {
    if (this.isClosed == true) {          
        this.hideElement = true;
        this.triggerClass = 'hamburger is-closed';
        this.isClosed = false;
        this.sidebarClass = this.sidebarBaseClass + ' sidebar-no-width';
        this.wrapperClass = 'page-content-wrapper-no-padding';
      } else {   
        
        this.hideElement = false;
        this.triggerClass = 'hamburger is-open';
        this.isClosed = true;
        this.sidebarClass = this.sidebarBaseClass + ' sidebar-width';
        this.wrapperClass = 'page-content-wrapper-padding';
      }
      
  }
}
