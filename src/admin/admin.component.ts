import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

import { User, Project } from '../_models';
import { AlertService, UserService, AuthenticationService, ModalService } from '../_services';

@Component({ 
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.less'] 
})
export class AdminComponent implements OnInit  {
    currentUser: User;
    loading = false;
    submitted = false;

    displayedColumns: string[] = ['index', 'username', 'fullName', 'email', 'role', 'action'];
    dataSource: User[];

    deletedInput: string;
    deletedId: number;

    //@Output() change: EventEmitter<MatSlideToggleChange>

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private alertService: AlertService,
        private modalService: ModalService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        this.loadUsers();
    }    
    ngOnInit() { }

    private loadUsers() {
        this.userService.getAll()
        .toPromise().then( pr => {
            this.dataSource = pr;
            console.log('users loaded');
        });
    }

    refresh(event: any) {
        this.dataSource = [];
        this.loadUsers();
    }

    openModal(id: number, name: string) {
        this.deletedId = id;
        this.deletedInput = name;
        this.modalService.open('userdelete');
    }

    checked(user): boolean {        
        if(user.role === 'Admin') {
            return true;
        }
        return false;
    }
    checkedAdmin(user): boolean {        
        if(user.username === this.currentUser.username) {
            return true;
        }
        return false;
    }

    onChange(el: MatSlideToggleChange, user: User) {
        el.source.disabled = true;
        this.userService.changeRole(user.username, el.checked)
        .pipe(first())
        .subscribe(
            data => {
                let message = el.checked ? 'Admin role added successfully' : 'Admin role remove successfully';                
                this.alertService.success(message, true);
                this.router.navigate(['/admin']);
                el.source.disabled = false;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}