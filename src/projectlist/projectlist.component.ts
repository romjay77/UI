import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { User, Project } from '../_models';
import { UserService, AuthenticationService, ModalService } from '../_services';

@Component({ 
    templateUrl: 'projectlist.component.html',
    styleUrls: ['projectlist.component.less'] 
})
export class ProjectListComponent implements OnInit  {
    currentUser: User;
    owner: string;

    displayedColumns: string[] = ['index', 'owner', 'name', 'desc', 'action'];
    dataSource: Project[];

    deletedInput: string;
    deletedFilePath: string;
    deletedId: number;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private modalService: ModalService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
        this.owner = this.router.url.replace('/listprojects/', '');
        this.loadProject();
    }

    ngOnInit() { }

    sliceDescription(str: string):string {
        return str.slice(-str.length, -(str.length - 20));
    }

    openModal(id: number, name: string, path: string) {
        this.deletedId = id;
        this.deletedInput = name;
        this.deletedFilePath = path;
        this.modalService.open('custom-modal-3');
    }
    closeModal() {
        this.modalService.close('custom-modal-3');
    }
    private loadProject() {
        this.userService.getProjects(this.owner)
        .toPromise().then( pr => {
            this.dataSource = pr;
            console.log('project loaded');
        })
    }
    refresh(event: any) {
        this.dataSource = [];
        this.loadProject();
    }
}