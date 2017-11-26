import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import {PetService} from '../../providers/pet-service-rest';

import {PetUserListPage} from '../pet-user-list/pet-user-list';



@Component({
    selector: 'page-pet-update',
    templateUrl: 'pet-update.html'
})
export class PetUpdatePage {

 constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public PetService: PetService, public toastCtrl: ToastController) {

	  
  }

  createNewPet(pet){
  this.navCtrl.push(PetUserListPage);
  }
}