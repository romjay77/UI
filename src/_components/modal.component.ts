import { Component, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, UserService, ModalService } from '../_services';


@Component({
    selector: 'jw-modal',
    template: 
    `<form [formGroup]="delForm" (ngSubmit)="onSubmit()">
        <div class="jw-modal">
            <div class="jw-modal-body">
                <h2>Please enter a project name to delete </h2>
                <mat-form-field style="padding-right: 5vw;">
                    <input matInput placeholder="name" formControlName="name" (change)="onChange()" required>
                    <mat-hint>Enter your a project name...</mat-hint>
                    <mat-error *ngIf="delForm.controls.name.invalid">
                        Project name dont match
                    </mat-error>
                </mat-form-field>
                <ng-content></ng-content>
                <button [disabled]="loading" mat-raised-button color="warn" >
                    Delete
                </button>
            </div>
        </div>
        <div class="jw-modal-background"></div>
    </form>
    <style>
    ::ng-deep .mat-hint {
        color: aliceblue !important;
      }
      ::ng-deep .mat-form-field{
        color: aliceblue;
      }
      ::ng-deep .mat-form-field-underline {
        background-color: aliceblue !important;
      } 
      ::ng-deep .mat-form-field-label {
        color: aliceblue !important;
      }
    </style>`,
    styleUrls: ['modal.component.less'] 
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Output() refreshEvent: EventEmitter<any> = new EventEmitter();

    private element: any;
    delForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private alertService: AlertService,
        private modalService: ModalService, 
        private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        this.delForm = this.formBuilder.group({
            name: ['', Validators.required],
        })

        let modal = this;
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'jw-modal') {
                modal.close();
            }
        });
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    onChange() {
        let inpt = document.getElementById('repeatName') as HTMLInputElement;
        if(inpt !== null) {
            let name = this.delForm.get('name') as FormControl;
            if(name.value !== inpt.value) {
                name.setErrors({ MustMatch: true });
            }
            else {
                name.setErrors(null);
            }
        }
    }

    open(): void {
        this.element.style.display = 'block';
    }
    close(): void {
        this.element.style.display = 'none';
    }
    onSubmit() {
        this.onChange();
        if(this.delForm.controls.name.invalid) {
            return;
        }
        let inpt = document.getElementById('id') as HTMLInputElement;
        let inpt2 = document.getElementById('path') as HTMLInputElement;

        let formData = new FormData();
        formData.append("path", inpt2.value);

        this.userService.deleteFile(formData)
        .pipe(first())
        .subscribe(data => {
            this.alertService.success('File deleted', true);
            this.userService.deleteProject(parseInt(inpt.value), inpt2.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Project successfully deleted', true);
                    this.refreshEvent.emit();
                    this.refreshEvent.next();
                    this.close();
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
}