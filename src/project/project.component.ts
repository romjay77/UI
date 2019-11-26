import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User, Project } from '../_models';
import { AlertService, UserService, AuthenticationService } from '../_services';

@Component({ 
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.less']
})
export class ProjectComponent implements OnInit {
    currentUser: User;
    projectForm: FormGroup;
    loading = false;
    submitted = false;

    uploadedFiles: Array<File>;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.projectForm = this.formBuilder.group(
            {
                name: ['', Validators.required],
                description: ['', Validators.required],
                filePath: [null , Validators.required]
            }
        );
    }

    get f() { return this.projectForm.controls; }
    get isSelected() { 
        let input = document.getElementById('input-file-id') as HTMLInputElement;
        if(input.value === '') {
            return 'primary';
        }
        return 'accent';
    }
    fileChange(element) {
        this.uploadedFiles = element.target.files;
    }

    onSubmit() {
        if(this.projectForm.invalid) {
            return;
        }
        this.submitted = true;

        this.alertService.clear();

        this.loading = true;
        let project = new Project;
        project.name = this.projectForm.controls.name.value;
        project.description = this.projectForm.controls.description.value;
        project.userId = this.currentUser.id;

        if(this.uploadedFiles[0].size > 20971520) {            
            this.alertService.error('file must be less than 20 mb!', true);
            this.loading = false;
            return;
        }

        let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            formData.append("uploads", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        formData.append("fullname", this.currentUser.fullName);
        formData.append("email", this.currentUser.email);
        formData.append("description", this.projectForm.controls.description.value);
        formData.append("filename", this.uploadedFiles[0].name);

        this.userService.getAdminEmails()
        .pipe(first())
        .subscribe(data => {
            formData.append("amails", <string>data);
            
            this.userService.uploadFile(formData)
            .pipe(first())
            .subscribe(            
                data => {
                    this.alertService.success('File loaded', true);
                    project.filePath = data['path'] as string;
                    this.userService.createProject(project)
                    .pipe(first())
                    .subscribe(
                        data => {
                            this.alertService.success('Project loaded', true);
                            this.router.navigate(['/']);
                        },
                        error => {
                            this.alertService.error(error);
                            this.loading = false;
                        });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        },  error => {
            console.log(error);
        });
    }
}