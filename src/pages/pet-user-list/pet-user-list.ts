import { Component } from '@angular/core';
import { Config, NavController } from 'ionic-angular';

import {PetService} from '../../providers/pet-service-rest';
import {PetUpdatePage} from '../pet-update/pet-update';
import {PetDetailPage} from '../pet-detail/pet-detail';


@Component({
    selector: 'page-pet-user-list',
    templateUrl: 'pet-user-list.html'
})
export class PetUserListPage {

    pets: Array<any>;
    viewMode: string = "list";

      
   constructor(public navCtrl: NavController, public service: PetService, public config: Config) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.pets = data);
    }

    deleteItem(pet){
        this.service.delete(pet);
    }  

    createPet(){
        this.navCtrl.push(PetUpdatePage, null);
    }
    
    openPetDetail(pet: any){
        this.navCtrl.push(PetDetailPage, pet);
    }

    openPetUpdate(pet: any){
        this.navCtrl.push(PetUpdatePage, pet);
    }
}