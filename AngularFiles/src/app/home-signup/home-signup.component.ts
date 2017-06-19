import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-signup',
  templateUrl: './home-signup.component.html',
  styleUrls: ['./home-signup.component.css']
})

@Injectable()
export class HomeSignupComponent implements OnInit {

  error:string;

  constructor(private http: Http, private router:Router) {}

  ngOnInit() {

    let margin = (window.innerHeight-$("#jumbo").outerHeight())/2;
     $("#jumbo").css("marginTop", margin);

    window.onresize = resize;

    function resize(){
      let margin = (window.innerHeight-$("#jumbo").outerHeight())/2;
      $("#jumbo").css("marginTop", margin);
    }
    $('#navbarTop').addClass('invisible');
  }

  onSubmitSignup(f : NgForm){
    const email = f.value.email;
    const password = f.value.password;
    const url:string = 'https://siw-project.herokuapp.com/UtenteController?comando=signup&email='+email+'&password='+password;
    this.http.get(url).subscribe(
      (response : Response) => {
        if(response.text().trim() === 'utenteInserito'){
          this.navigateToLogin();
        } else {
          this.error = "L'email è già usata.";
        }
      }
    );
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}
