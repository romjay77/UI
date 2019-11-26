import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

import { AlertService } from '../_services';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService, private _snackBar: MatSnackBar) { }

    // openSnackBar(message: string, action: string) {
    //     this._snackBar.open(message, action, {
    //       duration: 3500,
    //     });
    // }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
                switch (message && message.type) {
                    case 'success':
                        message.cssClass = 'alert alert-success';
                        break;
                    case 'error':
                        message.cssClass = 'alert alert-danger';
                        break;
                }

                this.message = message;
                
                if(message) {
                    this._snackBar.open(message.text, 'Close', {
                    duration: 3500,
                  });
                }
            });        
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}