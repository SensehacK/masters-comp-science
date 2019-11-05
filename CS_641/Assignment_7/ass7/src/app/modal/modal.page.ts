import { Component, Input, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
    selector: 'modal-page',
    templateUrl: 'modal-page.html',
})

export class ModalPage implements OnInit {

    constructor() {
        console.log('Yo!');

    }

    ngOnInit() { }

}

