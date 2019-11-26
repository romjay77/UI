import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { User, Project } from '../_models';
import { AlertService, UserService, AuthenticationService, ModalService } from '../_services';

@Component({ 
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.less'] 
})
export class UserComponent implements OnInit  {
    changeForm: FormGroup;
    currentUser: User;
    hide = true;
    loading = false;
    submitted = false;

    displayedColumns: string[] = ['index', 'name', 'desc', 'act'];
    dataSource: Project[];

    deletedInput: string;
    deletedFilePath: string;
    deletedId: number;

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private alertService: AlertService,
        private modalService: ModalService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        this.loadProject();
    }

    ngOnInit() {
        this.changeForm = this.formBuilder.group({
            fullName: ['', Validators.required],
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') 
            ])],
            username: ['', Validators.required],
            newPassword: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    get f() { return this.changeForm.controls; }
    get isAdnin() { return this.currentUser.role === 1; }

    sliceDescription(str: string):string {
        return str.slice(-str.length, -(str.length - 20));
    }

    onChangeFName() {
        if(this.changeForm.controls.fullName.invalid) {
            return;
        }
        let updatedUser = JSON.parse(JSON.stringify(this.currentUser));
        updatedUser.password = '';
        updatedUser.fullName = this.changeForm.controls.fullName.value;
        this.userService.update(updatedUser, this.currentUser.id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Update successful', true);
                this.currentUser.fullName = this.changeForm.controls.fullName.value;
                this.router.navigate(['/user']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    onChangeEmail() {
        if(this.changeForm.controls.email.invalid) {
            return;
        }
        let updatedUser = JSON.parse(JSON.stringify(this.currentUser));
        updatedUser.password = '';
        updatedUser.email = this.changeForm.controls.email.value;
        this.userService.update(updatedUser,  this.currentUser.id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Update successful', true);
                this.currentUser.email = this.changeForm.controls.email.value;
                this.router.navigate(['/user']);                
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    onChangeUserName() {
        if(this.changeForm.controls.username.invalid) {
            return;
        }
        let updatedUser = JSON.parse(JSON.stringify(this.currentUser));
        updatedUser.password = '';
        updatedUser.username = this.changeForm.controls.username.value;
        this.userService.update(updatedUser,  this.currentUser.id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Update successful', true);
                this.currentUser.username = this.changeForm.controls.username.value;
                localStorage.clear();
                this.authenticationService.logout();
                this.router.navigate(['/login']);                
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    onChangePassword() {
        if(this.changeForm.controls.newPassword.invalid) {
            return;
        }
        let updatedUser = JSON.parse(JSON.stringify(this.currentUser));
        updatedUser.password = this.changeForm.controls.newPassword.value;
        this.userService.update(updatedUser,  this.currentUser.id)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Update successful', true);
                this.router.navigate(['/user']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
    getPasswordErrorMessage() {
        return this.changeForm.controls.newPassword.hasError('required') ? 'You must enter a value' : 'Not a valid email';
    }
    getEmailErrorMessage() {
        return this.changeForm.controls.email.hasError('required') ? 'You must enter a value' : 'Not a valid email';
    }

    openModal(id: number, name: string, path: string) {
        this.deletedId = id;
        this.deletedInput = name;
        this.deletedFilePath = path;
        this.modalService.open('custom-modal-1');
    }

    closeModal() {
        this.modalService.close('custom-modal-1');
    }
    private loadProject() {
        this.userService.getProjects(this.currentUser.username)
        .toPromise().then( pr => {
            this.dataSource = pr;
            console.log('project loaded');
        });
    }

    refresh(event: any) {
        this.dataSource = [];
        this.loadProject();
    }
}