import { Component } from '@angular/core';
import { Config, NavController } from 'ionic-angular';

import {PetService} from '../../providers/pet-service-rest';
import {PetUpdatePage} from '../pet-update/pet-update';
import {PetDetailPage} from '../pet-detail/pet-detail';
import {PetCreatePage} from '../pet-create/pet-create';


@Component({
    selector: 'page-pet-user-list',
    templateUrl: 'pet-user-list.html'
})
export class PetUserListPage {

    pets: Array<any>;
    viewMode: string = "list";

      
   constructor(public navCtrl: NavController, public service: PetService, public config: Config) {
        /*this.service.findByOwnerId("5a1c8a4e4bef81001481f512")
            .then(data => this.pets = data);*/
        this.service.findAll()
            .then(data => this.pets = data);
    }

    doRefresh(refresher) {
        this.service.findAll()
            .then(data => this.pets = data);
        refresher.complete();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.pets = data);
    }

    deleteItem(pet){
        this.service.delete(pet);
        this.service.findAll()
            .then(data => this.pets = data);
    }  

    createPet(){
        this.navCtrl.push(PetCreatePage, null);
    }
    
    openPetDetail(pet: any){
        this.navCtrl.push(PetDetailPage, pet);
    }

    openPetUpdate(pet: any){
        this.navCtrl.push(PetUpdatePage, pet);
    }
}