import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

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

    getPetImage(petId) {
        
        this.petService.findById(petId)
            .then(pet => this.pet = pet)
            .catch(error => alert(error));

        //return this.pet.image;
        //return "https://i.skyrock.net/6788/18136788/pics/518207324.jpg";
    }

    getPetName(petId) {
        
        this.petService.findById(petId)
            .then(data => this.pet = data)
            .catch(error => alert(error));

        return this.pet.name;
        //return "https://i.skyrock.net/6788/18136788/pics/518207324.jpg";
    }

    getUserName(userId) {
        
        this.userService.findById(userId)
            .then(data => this.user = data)
            .catch(error => alert(error));

        return this.user.username;
        //return "https://i.skyrock.net/6788/18136788/pics/518207324.jpg";
    }
}
