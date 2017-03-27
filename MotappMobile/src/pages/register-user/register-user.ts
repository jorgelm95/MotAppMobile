import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import { AngularFireDatabase  } from 'angularfire2';
//import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';



//pages
import {TabsPage } from '../tabs/tabs';

// interfaces
import {IUSerRegister} from '../../commons/IUserRegister';

/*
  Generated class for the RegisterUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html'
})
export class RegisterUserPage {
 

  registerUser:IUSerRegister ={
  "Nombre":'',
  "Correo":'',
  "NombreUsuario":'',
  "Contrasena":''
};

  listsUsers:any;

  constructor(public navCtrl: NavController, 
   public navParams: NavParams,
   private alertCtrl:AlertController,
   private load:LoadingController,
   private database:AngularFireDatabase) {
    
  } 

 

  ionViewDidLoad() {
     this.listsUsers = this.database.list('/Users');
     this.registerUser.NombreUsuario="";
     this.registerUser.Nombre="";
     this.registerUser.Correo="";
     this.registerUser.Contrasena="";
  }

  registeUser():void{

    this.listsUsers.push({Nombre:this.registerUser.Nombre,
      Correo:this.registerUser.Correo,
      NombreUsuario:this.registerUser.NombreUsuario,
      Contrasena:this.registerUser.Contrasena
    });

    let loading =this.load.create({
      content:"Guardando el registro",
      duration:3000
    })

    loading.present();
    this.navCtrl.push(TabsPage);

  }


  cancelRegister():void{

    let cancelRegister = this.alertCtrl.create({
      title:'Esta seguro de cancelar el registro',
      buttons:[
        {
          text:'Si',
          handler: dta =>{
            this.navCtrl.push(LoginPage);
          }
        },
        {
          text:'No',
          handler:data=>{
            cancelRegister.dismiss();
          }

        }
      ]
    });
  
    cancelRegister.present();

  }



}
