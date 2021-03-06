import { Component } from '@angular/core';

import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import {AdvertListPage} from '../advert-list/advert-list';
import {ProfileDetailPage} from '../profile-detail/profile-detail';
import {PetUserListPage} from '../pet-user-list/pet-user-list';
import {UserService} from '../../providers/user-service-rest';


@Component({
    selector: 'page-profile-update',
    templateUrl: 'profile-update.html'
})

export class ProfileUpdatePage {

  user: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService, public toastCtrl: ToastController, public alertCtrl: AlertController) {
        this.user = this.navParams.data;
        UserService.findById("5a1c8a4e4bef81001481f512").then(
            user => this.user = user
        );
        this.UserService = UserService;
    }   

  updateUserInfo (user){
    console.log(user);
    this.UserService.updateInfo(user);
    this.showPrompt(user);
  }

  showPrompt(user) {
    let prompt = this.alertCtrl.create({
      title: 'Verification',
      message: "Please enter your password to save your changes",
      inputs: [
        {
          type:"password",
          name: 'password',
          placeholder: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          this.navCtrl.setRoot(ProfileUpdatePage);
          }
        }
      ]
    });
    prompt.present();
  }



  openPetList() {
    this.navCtrl.push(PetUserListPage);
  }

}