import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { RegisterUserPage } from '../register-user/register-user';


//pages
import {TabsPage } from '../tabs/tabs';

// interfaces

import { Iuser } from '../../commons/IUser'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

private  user:Iuser ={
    "Username":'',
    "Password":''
};
 userMock ={username:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {

  }
  // código
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.userMock ={username:'jomenco',password:'123'};
    console.log("estoy en la página");
    //this.user.Username="";
    //this.user.Password="";
  }

  login():void{

    if  (this.userMock.username == this.user.Username && this.userMock.password == this.user.Password){

      this.navCtrl.push(TabsPage);

    }else{

    let loginAlert = this.alertCtrl.create({
      title:"Usuario o contraseña incorrectos",
      buttons:['OK','Cancelar']
    });
    loginAlert.present();
    }


  }

  registerUser():void{

    this.navCtrl.push(RegisterUserPage);
  }
}
