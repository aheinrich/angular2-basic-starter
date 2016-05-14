import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'
import { MD_CARD_DIRECTIVES } from '@angular2-material/card'
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav'
import { MdToolbar } from '@angular2-material/toolbar';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [
        ROUTER_DIRECTIVES, 
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES, 
        MD_CARD_DIRECTIVES,
        MdIcon, 
        MdToolbar,
         MdButton],
    providers: [ MdIconRegistry ]
})
@Routes([
])

export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() {
        // this.router.navigate(['/transactions']);
    }

}