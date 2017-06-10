
import { Component, OnInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
   elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }


  ngOnInit() {

    let margin = (window.innerHeight-$("#jumbo").outerHeight())/2;
     $("#jumbo").css("marginTop", margin);

    window.onresize = resize;

    function resize(){
      let margin = (window.innerHeight-$("#jumbo").outerHeight())/2;
      $("#jumbo").css("marginTop", margin);
    }

  }

  onSubmitLogin(f : NgForm){
    const username = f.value.username;
    const password = f.value.password;
    //invio username e password al servizio di autenticazione etc.etc.
  }

}
