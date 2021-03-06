import {Component, OnInit} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {AdvertService} from '../../providers/advert-service-rest';
import {UserService} from '../../providers/user-service-rest';
import {PetService} from '../../providers/pet-service-rest';

import {ProfileDetailPage} from '../profile-detail/profile-detail';

import {PetDetailPage} from '../pet-detail/pet-detail';

import {AdvertUpdatePage} from '../advert-update/advert-update';

import leaflet from 'leaflet';

@Component({
    selector: 'page-advert-detail',
    templateUrl: 'advert-detail.html'
})
export class AdvertDetailPage {

    advert: any;
    user: any;
    pet: any;

    constructor(
        public actionSheetCtrl: ActionSheetController, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public advertService: AdvertService, 
        public userService: UserService, 
        public petService: PetService, 
        private iab: InAppBrowser,
        public toastCtrl: ToastController) {

        this.advert = this.navParams.data;
        advertService.findById(this.advert.id).then(
            advert => this.advert = advert
        );

        userService.findById(this.advert.userId).then(
            user => this.user = user
        );

        petService.findById(this.advert.petId).then(
            pet => this.pet = pet
        );
    }

    openUserDetail(){
        this.navCtrl.push(ProfileDetailPage, this.user);
    }

    openPetDetail(){
        this.navCtrl.push(PetDetailPage, this.pet);
    }

    updateAdvert(advert){
        this.navCtrl.push(AdvertUpdatePage, advert);
    }

    openWithInAppBrowser(){

        const browser = this.iab.create('https://www.paypal.com/donate/?token=BUVDB535JoOgJjkkyXNzOQ4t8jmRedWf1rzPSWrV6_JedAWoN8Fhsamoos_1pik8P9ZPy0&country.x=FR&locale.x=FR','_self',{location:'no'}); 

    }

}
