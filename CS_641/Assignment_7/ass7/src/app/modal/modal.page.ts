import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'modal-page',
    templateUrl: 'modal-page.html',
})

export class ModalPage implements OnInit {
    @Input() data: any;

    constructor(private modalCtrl: ModalController) {
        console.log('Yo!');

    }

    ngOnInit() {
        // Error handling for usage of toLowerCase
        // Can't directly apply lowercase to object need to apply it to String
        if (typeof this.data !== 'undefined') {
            this.data = this.data.toLowerCase();
        }
        console.log(typeof (this.data));
        if (!this.data || typeof this.data !== 'string') {
            this.data = 'Kautilya';
        }
        else if (this.data === 'haik' || this.data === 'prakash') {
            this.data = this.data + '😂😬';
            console.log('Hope I\'m doing alright!');
            console.log('P.S: You should checkout  https://electronjs.org/ ');


        }

    }


    dismissModal() {
        this.modalCtrl.dismiss({
            name: 'Sensehack',
            name2: 'Kautilya',
        });
    }
}

