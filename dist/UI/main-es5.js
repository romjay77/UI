(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/_components/alert.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/_components/alert.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/admin/admin.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/admin/admin.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"height: auto;min-height: 80%;margin-top: 50px;align-content: baseline;\">\r\n    <div style=\"padding: 0 5vw;\">\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" style=\"width: 100%;\">\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"username\">\r\n                <th mat-header-cell *matHeaderCellDef> Username </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"fullName\">\r\n                <th mat-header-cell *matHeaderCellDef> FullName </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.fullName}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"email\">\r\n                <th mat-header-cell *matHeaderCellDef> Email </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"role\">\r\n                <th mat-header-cell *matHeaderCellDef> Is Admin </th>\r\n                <td mat-cell *matCellDef=\"let element\"><mat-slide-toggle (change)=\"onChange($event, element)\" [disabled]=\"checkedAdmin(element)\" [checked]=\"checked(element)\"></mat-slide-toggle></td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef> Actiom </th>\r\n                <td mat-cell *matCellDef=\"let element\"> \r\n                    <button [disabled]=\"checkedAdmin(element)\" style=\"margin-right: 2vw;\"mat-raised-button color=\"accent\" (click)=\"openModal(element.id, element.username)\" >\r\n                        Delete user\r\n                    </button>\r\n                    <a mat-raised-button color=\"primary\" [routerLink]=\"['/listprojects', element.username]\" param>\r\n                        Get projects\r\n                    </a>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>  \r\n    </div>\r\n</div>\r\n\r\n<userdelete-modal (refreshEvent)=\"refresh($event)\" id=\"userdelete\">\r\n    <input type=\"text\" [(ngModel)]=\"deletedInput\" hidden id=\"repeatName\"/>\r\n    <input type=\"text\" [(ngModel)]=\"deletedId\" hidden id=\"id\"/>\r\n</userdelete-modal>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-drawer-container style=\"height: 100%;\"> \r\n    <mat-drawer #sidenav [mode]=\"push\">\r\n      <div class=\"banner-men\">\r\n        <a routerLink=\"/\" class=\"nav-link\" style=\"padding: 0 10px 0 0;\">\r\n          <img width=\"70\" alt=\"Angular Logo\" src=\"/assets/logo.png\" />\r\n          <span>Crypto Promoter</span>\r\n        </a>        \r\n      </div>\r\n        <div class=\"custom-toggle-menu\">\r\n            <a *ngIf=\"!isAuth\" style=\"background-color: rgb(98, 176, 143);\" class=\"nav-link men-link mobile\" routerLink=\"/user\"> {{ currentUser.username }} </a>\r\n            <a *ngIf=\"isAuth\" style=\"background-color: rgb(98, 176, 143);\" class=\"nav-link men-link mobile\" routerLink=\"/login\">LogIn</a>\r\n            <a *ngIf=\"!isAuth\" style=\"background-color: rgb(98, 176, 143);\" class=\"nav-link men-link mobile\" (click)=\"logout()\">LogOut</a>\r\n            <a class=\"nav-link men-link mobile\" style=\"background-color: rgb(98, 176, 143);\" routerLink=\"/project\">Register the project</a>\r\n        </div>\r\n        <div class=\"footer-men\">\r\n          <p>\r\n              Copyright © 2019 cryptopromoter.io. All rights reserved.       \r\n          </p>\r\n        </div>\r\n    </mat-drawer>\r\n  \r\n    <mat-drawer-content>\r\n      <div class=\"toolbar\" role=\"banner\">\r\n        <div>\r\n            <a routerLink=\"/\" class=\"nav-link\">\r\n              <img width=\"80\" alt=\"Angular Logo\" src=\"/assets/logo.png\" />\r\n              <span class=\"logo_n\" style=\"padding-top: 1px;\">Crypto Promoter <br>\r\n                <span style=\"text-transform: uppercase;font-size: .96rem;\">elevate your project</span>\r\n              </span>\r\n            </a>   \r\n            <!-- <span style=\"padding-left: 72px;text-transform: uppercase;color: #d9edec;\r\n            font-size: .96rem;\">elevate your project</span> -->\r\n        </div>\r\n        <div class=\"spacer\"></div>\r\n        <div class=\"custom-toggle\">\r\n            <a *ngIf=\"!isAuth\" style=\"background-color: #3c5172;\" class=\"nav-link men-link\" routerLink=\"/user\"> {{ currentUser.username }} </a>\r\n            <a *ngIf=\"isAuth\" style=\"background-color: rgb(85, 144, 133);\" class=\"nav-link men-link\" routerLink=\"/login\">LogIn</a>\r\n            <a *ngIf=\"!isAuth\" style=\"background-color: rgb(85, 144, 133);\" class=\"nav-link men-link\" (click)=\"logout()\">LogOut</a>\r\n            <a class=\"nav-link men-link\" style=\"background-color: rgb(98, 176, 143);\" routerLink=\"/project\">Register the project</a>\r\n        </div>\r\n        <div class=\"custom-toggle-show\">\r\n            <button class=\"toggle_btn\" mat-fab color=\"primary\" (click)=\"sidenav.toggle()\">\r\n                <mat-icon style=\"font-size: 2.2rem !important; height: 35px !important; width: 35px !important;\">add</mat-icon>\r\n            </button>\r\n        </div>\r\n      </div>\r\n      \r\n      <alert></alert>\r\n      <router-outlet></router-outlet>\r\n    </mat-drawer-content>\r\n  </mat-drawer-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/cookie/cookie.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/cookie/cookie.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"text-align: center;\">\r\n    <div>\r\n        <h2 style=\"margin: 4vh 4vw;\">Cookie Policy</h2>\r\n        <p style=\"margin: 4vh 4vw;\">\r\n            Our website uses small data files called cookies to improve functionality and your user experience. \r\n            A cookie is a small text file that a website saves on your computer or mobile device when you visit \r\n            the site. It enables the website to remember your actions and preferences (such as login, language, \r\n            font size and other display preferences) over a period of time, so you don’t have to keep re-entering \r\n            them whenever you come back to the site or browse from one page to another.\r\n        </p>\r\n        <p style=\"margin: 4vh 4vw;\">\r\n            You can choose which cookies to block or allow by changing your browser settings. Please note \r\n            that some functions of our website require the use of cookies to work properly, and that by \r\n            blocking cookies you may not be able to access all or some portions of our website.\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<style>\r\n    @media screen and (max-width: 580px) {\r\n        .container {\r\n            margin-top: 10vh;\r\n        }\r\n    }\r\n</style>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/home/home.component.html": 
        /*!****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/home/home.component.html ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-back\">\r\n    <div class=\"filter-back\"></div>\r\n    <div class=\"img-back\"></div>\r\n    <div class=\"back-container\">\r\n        <div (click)=\"project()\">\r\n            <div></div>\r\n            <div class=\"filter-back-cont\"></div>\r\n            <a *ngIf=\"isAuth\" style=\"font-size: 3rem;\">Sign up now</a>\r\n            <a *ngIf=\"!isAuth\" style=\"font-size: 3rem;\">Submit now</a>\r\n        </div>\r\n        <div>\r\n            <div></div>\r\n            <div class=\"filter-back-cont\"></div>\r\n            <h2 style=\"font-size: 2rem;\">\r\n                Elevate your project to the next level\r\n            </h2>\r\n            <p style=\"font-size: 1.5rem;\">\r\n                Connect with the investors and get your project funded.\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"info-container\">\r\n    <div>\r\n        <h1>Boost your startup </h1>\r\n        <mat-tab-group color=\"accent\" [color]=\"color\">\r\n            <mat-tab label=\"SUBMIT\">\r\n                <div style=\"min-height: 450px;padding-top: 20px;\">\r\n                    <p>\r\n                        We bring together startups looking for financial support and investors with the available capital, \r\n                        contacts and knowledge to help you succeed.\r\n                    </p>\r\n                    <ul>\r\n                        <li>Add a pitch/presentation of your business using our quick and easy registration form.</li>\r\n                        <li>The submitted materials will be reviewed within 2 weeks.</li>\r\n                    </ul>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"ADVISOR SUPPORT\">\r\n                <div style=\"min-height: 450px;padding-top: 20px;\">\r\n                    <ul>\r\n                        <li>\r\n                            Your project will be reviewed by the investors and experts in crypto space\r\n                                around the globe.\r\n                        </li>\r\n                        <li>\r\n                            Please pay attention to your business model, ROI metrics, market trends, competitors, etc.\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </mat-tab>\r\n            <mat-tab label=\"GET FUNDED\">\r\n                <div style=\"min-height: 450px;padding-top: 20px;\">\r\n                    <ul>\r\n                        <li>Submit a pitch and we’ll help you with the promotion.</li>\r\n                        <li>\r\n                            Feel free to mention the funds you've already invested in the project and the sum that's \r\n                            required for the next step in your presentation materials.\r\n                        </li>\r\n                        <li>Be ready to present your project in a transparent way.</li>\r\n                    </ul>\r\n                </div>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </div>\r\n    <div>\r\n        <div id=\"one-t\" class=\"tab-right-bck\" style=\"display: flex;\">\r\n            <div></div>\r\n            <div class=\"right-info\">\r\n                <div></div>\r\n                <h1>Crowdfunding platform</h1>\r\n                <p>\r\n                    Because of our profound approach to each client, more than 70% of submitted campaigns reach their funding goal.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div id=\"two-t\" class=\"tab-right-bck\">\r\n            <div></div>\r\n            <div class=\"right-info\">\r\n                <div></div>\r\n                <p>\r\n                    Our main focus is startups at the growth stage with an emphasis on blockchain technology and FinTech.\r\n                </p>                \r\n            </div>\r\n        </div>\r\n        <div id=\"three-t\" class=\"tab-right-bck\">\r\n            <div></div>\r\n            <div class=\"right-info\">\r\n                <div></div>\r\n                <p>\r\n                    Most promising projects will be reviewed thoroughly and advised for further promotion.\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"feedback\">\r\n    <form *ngIf=\"isAuth\" [formGroup]=\"feedbackForm\" class=\"pr-form\" (ngSubmit)=\"onSubmit()\">\r\n        <h1 style=\"width: 100%;\">If You have any questions</h1>\r\n        <div class=\"f-control\">\r\n            <mat-form-field>\r\n                <input formControlName=\"fullName\" matInput placeholder=\"Full name\" class=\"pr-full-width\" required>\r\n                <mat-hint>Enter full name...</mat-hint>\r\n                <mat-error *ngIf=\"feedbackForm.controls.fullName.invalid\">\r\n                    Full name is required\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"f-control\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n                <mat-hint>Enter your email...</mat-hint>\r\n                <mat-error *ngIf=\"feedbackForm.controls.email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"f-control\">\r\n            <mat-form-field>\r\n                <textarea formControlName=\"message\" matInput placeholder=\"Message\" class=\"pr-full-width\" required></textarea>\r\n                <mat-hint>Enter message...</mat-hint>\r\n                <mat-error *ngIf=\"feedbackForm.controls.message.invalid\">\r\n                    Message is required\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </div>        \r\n        <button mat-raised-button color=\"primary\">Send</button>\r\n    </form>\r\n\r\n    <form *ngIf=\"!isAuth\" [formGroup]=\"feedbackForm2\" class=\"pr-form\" (ngSubmit)=\"onSubmit2()\">\r\n        <h1 style=\"width: 100%;\">If You have any questions <br> or a business offer</h1>\r\n        <div class=\"f-control\">\r\n            <mat-form-field>\r\n                <textarea formControlName=\"message\" matInput placeholder=\"Message\" class=\"pr-full-width\" required></textarea>\r\n                <mat-hint>Enter message...</mat-hint>\r\n                <mat-error *ngIf=\"feedbackForm2.controls.message.invalid\">\r\n                    Message is required\r\n                </mat-error>\r\n            </mat-form-field>\r\n        </div>        \r\n        <button mat-raised-button color=\"primary\">Send</button>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n    <div></div>\r\n    <div>\r\n        <p>\r\n            Copyright © 2019 cryptopromoter.io. All rights reserved.\r\n        </p>\r\n        <p>\r\n            Crypto Promoter is a software as a service crowdfunding platform. Crypto Promoter is not a registered \r\n            broker-dealer and does not offer investment advice or advise on the raising of capital through securities \r\n            offerings. Crypto Promoter does not recommend or otherwise suggest that any investor make an investment \r\n            in a particular company, or that any company offers securities to a particular investor. All investors \r\n            should make their own determination of whether or not to make any investment based on their own \r\n            independent evaluation and analysis. Crypto Promoter takes no part in the negotiation or execution \r\n            of transactions for the purchase or sale of securities, and at no time has possession of funds or \r\n            securities. No securities transactions are executed or negotiated on or through the Crypto Promoter \r\n            platform. Crypto Promoter receives no compensation in connection with the purchase or sale of securities. \r\n            Crypto Promoter does not provide legal, accounting or tax advice. Any representation or implication \r\n            to the contrary is expressly disclaimed.\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"isAccept\" class=\"cookie-show\">\r\n    <p> \r\n        Notice: This website uses cookies. If you want to know more or withdraw your consent to all or some of the cookies, \r\n        please refer to the \r\n        <a routerLink=\"/cookie\">cookie policy</a>. \r\n        By clicking “I Accept”, scrolling this page, clicking on a link or otherwise continuing to browse, \r\n        you agree to the use of cookies. \r\n    </p>\r\n    <button style=\"max-height: 40px; min-width: 80px;\" mat-raised-button color=\"primary\" (click)=\"cookieClose()\"> \r\n        I Accept \r\n    </button>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/login/login.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/login/login.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"container_m\">\r\n        <div class=\"login-container blk\">\r\n            <h2>LogIn</h2>\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-gr\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n                        <mat-hint>Enter your username...</mat-hint>\r\n                        <mat-error *ngIf=\"loginForm.controls.username.invalid\">\r\n                            Username is required\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"form-gr\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\r\n                        <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                            <!-- hide -->\r\n                        </a>\r\n                        <mat-hint>Enter your password...</mat-hint>\r\n                        <mat-error *ngIf=\"loginForm.controls.password.invalid\">\r\n                            Password is required\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"form-gr\">\r\n                    <button [disabled]=\"loading\" mat-raised-button color=\"primary\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                        Login\r\n                    </button>\r\n                    <button routerLink=\"/register\" mat-raised-button>Register</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/project/project.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/project/project.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container_m\">\r\n  <div>\r\n      <div class=\"proj-cont\">\r\n        <h2>Assign your project</h2>\r\n        <form action=\"/uploadFile\" [formGroup]=\"projectForm\" class=\"pr-form\" (ngSubmit)=\"onSubmit()\"  enctype=\"multipart/form-data\">\r\n          <div class=\"cont\">\r\n            <mat-form-field>\r\n              <input formControlName=\"name\" matInput placeholder=\"Name of project\" required class=\"pr-full-width\">\r\n              <mat-hint>Enter project name...</mat-hint>\r\n              <mat-error *ngIf=\"projectForm.controls.name.invalid\">\r\n                Name of project is required\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <mat-form-field>\r\n              <textarea formControlName=\"description\" matInput placeholder=\"Description\" required class=\"pr-full-width\"></textarea>\r\n              <mat-hint>Enter project description...</mat-hint>\r\n              <mat-error *ngIf=\"projectForm.controls.description.invalid\">\r\n                Description is required\r\n              </mat-error>\r\n            </mat-form-field>\r\n            <div style=\"margin: 2vh 2vw; display: flex;     justify-content: space-around;\">\r\n              <div>\r\n                <input (change)=\"fileChange($event)\" formControlName=\"filePath\" hidden id=\"input-file-id\" type=\"file\" />\r\n                <label for=\"input-file-id\"><a mat-raised-button color=\"{{ isSelected }}\">Choose Files</a></label>\r\n              </div>\r\n              <button mat-raised-button color=\"primary\">Submit</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n  </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/projectlist/projectlist.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/projectlist/projectlist.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"height: auto;min-height: 80%;margin-top: 50px;align-content: baseline;\">\r\n    <div style=\"display: flex;justify-content: center;\">\r\n        <a mat-raised-button color=\"primary\" routerLink=\"/admin\" style=\"padding: 0 5vw;\">Back</a>\r\n    </div>\r\n    <div style=\"padding: 3vh 3vw;\">\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" style=\"width: 100%;\">\r\n            <ng-container matColumnDef=\"index\">\r\n                <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"owner\">\r\n                <th mat-header-cell *matHeaderCellDef> Owner </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{owner}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"desc\">\r\n                <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.description}}</td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef> Actiom </th>\r\n                <td mat-cell *matCellDef=\"let element\"> \r\n                    <button [disabled]=\"loading\" mat-raised-button color=\"accent\" (click)=\"openModal(element.id, element.name, element.filePath)\" >\r\n                        Delete\r\n                    </button>\r\n                </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>  \r\n    </div>\r\n\r\n    <jw-modal (refreshEvent)=\"refresh($event)\" id=\"custom-modal-3\">\r\n        <input type=\"text\" [(ngModel)]=\"deletedInput\" hidden id=\"repeatName\"/>\r\n        <input type=\"text\" [(ngModel)]=\"deletedId\" hidden id=\"id\"/>\r\n        <input type=\"text\" [(ngModel)]=\"deletedFilePath\" hidden id=\"path\"/>\r\n    </jw-modal>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/register/register.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/register/register.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"container_m\">\r\n        <div class=\"blk\">\r\n            <h2>Register</h2>\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Full name\" formControlName=\"fullName\" required>\r\n                        <mat-hint>Enter your full name...</mat-hint>\r\n                        <mat-error *ngIf=\"registerForm.controls.fullName.invalid\">\r\n                            Full name is required\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n                        <mat-hint>Enter your email...</mat-hint>\r\n                        <mat-error *ngIf=\"registerForm.controls.email.invalid\">\r\n                            {{getEmailErrorMessage()}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n                        <mat-hint>Enter your username...</mat-hint>\r\n                        <mat-error *ngIf=\"registerForm.controls.username.invalid\">\r\n                            Username is required\r\n                        </mat-error>\r\n                    </mat-form-field>        \r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required>\r\n                        <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                            <!-- hide -->\r\n                        </a>\r\n                        <mat-hint>Enter your password...</mat-hint>\r\n                        <mat-error *ngIf=\"registerForm.controls.password.invalid\">\r\n                            {{getPasswordErrorMessage()}}\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loading\" mat-raised-button color=\"primary\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                        Register\r\n                    </button>\r\n                    <button routerLink=\"/login\" mat-raised-button>Cancel</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/user/user.component.html": 
        /*!****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/user/user.component.html ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container container_m\">\r\n    <div class=\"blk\">\r\n        <div *ngIf=\"isAdnin\" style=\"display: flex; justify-content: center; margin: 2vh 2vw;\">\r\n            <a mat-raised-button color=\"accent\" routerLink=\"/admin\"> Admin panel</a>\r\n        </div>\r\n        <h2>Hi {{currentUser.fullName}}.</h2>\r\n        <mat-tab-group color=\"accent\" >\r\n            <mat-tab label=\"{{ currentUser.fullName }}\">\r\n                <form [formGroup]=\"changeForm\" (ngSubmit)=\"onChangeFName()\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Full name\" formControlName=\"fullName\" required>\r\n                            <mat-hint>Enter your full name...</mat-hint>\r\n                            <mat-error *ngIf=\"changeForm.controls.fullName.invalid\">\r\n                                Full name is required\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" mat-raised-button color=\"primary\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                            Change\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </mat-tab>\r\n            <mat-tab label=\"{{ currentUser.email }}\">\r\n                <form [formGroup]=\"changeForm\" (ngSubmit)=\"onChangeEmail()\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                            <mat-hint>Enter your email...</mat-hint>\r\n                            <mat-error *ngIf=\"changeForm.controls.email.invalid\">\r\n                                    {{getEmailErrorMessage()}}\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" mat-raised-button color=\"primary\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                            Change\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </mat-tab>\r\n            <mat-tab label=\"{{ currentUser.username }}\">\r\n                <form [formGroup]=\"changeForm\" (ngSubmit)=\"onChangeUserName()\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n                            <mat-hint>Enter your username...</mat-hint>\r\n                            <mat-error *ngIf=\"changeForm.controls.username.invalid\">\r\n                                Username is required\r\n                            </mat-error>\r\n                        </mat-form-field>        \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" mat-raised-button color=\"primary\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                            Change\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </mat-tab>\r\n            <mat-tab label=\"Password\">\r\n                <form [formGroup]=\"changeForm\" (ngSubmit)=\"onChangePassword()\">\r\n                    <div class=\"form-group\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"New password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"newPassword\" required>\r\n                            <a mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                            </a>\r\n                            <mat-error *ngIf=\"changeForm.controls.newPassword.invalid\">\r\n                                {{getPasswordErrorMessage()}}\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"loading\" mat-raised-button color=\"primary\">\r\n                            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                            Change\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </mat-tab>\r\n            <mat-tab label=\"Projects\">\r\n                <div style=\"padding: 3vh 3vw;overflow-y: auto;max-height: 40vh;\">\r\n                    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table\" style=\"width: 100%;\">\r\n                        <ng-container matColumnDef=\"index\">\r\n                            <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                            <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"desc\">\r\n                            <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{sliceDescription(element.description)}}...</td>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"act\">\r\n                            <th mat-header-cell *matHeaderCellDef> Actiom </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> \r\n                                <button [disabled]=\"loading\" mat-raised-button color=\"accent\" (click)=\"openModal(element.id, element.name, element.filePath)\" >\r\n                                    Delete\r\n                                </button>\r\n                            </td>\r\n                        </ng-container>\r\n                        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>  \r\n                </div>\r\n\r\n                <jw-modal (refreshEvent)=\"refresh($event)\" id=\"custom-modal-1\">\r\n                    <input type=\"text\" [(ngModel)]=\"deletedInput\" hidden id=\"repeatName\"/>\r\n                    <input type=\"text\" [(ngModel)]=\"deletedId\" hidden id=\"id\"/>\r\n                    <input type=\"text\" [(ngModel)]=\"deletedFilePath\" hidden id=\"path\"/>\r\n                </jw-modal>\r\n\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/_components/alert.component.ts": 
        /*!********************************************!*\
          !*** ./src/_components/alert.component.ts ***!
          \********************************************/
        /*! exports provided: AlertComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function () { return AlertComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var AlertComponent = /** @class */ (function () {
                function AlertComponent(alertService, _snackBar) {
                    this.alertService = alertService;
                    this._snackBar = _snackBar;
                }
                // openSnackBar(message: string, action: string) {
                //     this._snackBar.open(message, action, {
                //       duration: 3500,
                //     });
                // }
                AlertComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.alertService.getAlert()
                        .subscribe(function (message) {
                        switch (message && message.type) {
                            case 'success':
                                message.cssClass = 'alert alert-success';
                                break;
                            case 'error':
                                message.cssClass = 'alert alert-danger';
                                break;
                        }
                        _this.message = message;
                        if (message) {
                            _this._snackBar.open(message.text, 'Close', {
                                duration: 3500,
                            });
                        }
                    });
                };
                AlertComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                return AlertComponent;
            }());
            AlertComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
                { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
            ]; };
            AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/_components/alert.component.html")).default })
            ], AlertComponent);
            /***/ 
        }),
        /***/ "./src/_components/index.ts": 
        /*!**********************************!*\
          !*** ./src/_components/index.ts ***!
          \**********************************/
        /*! exports provided: AlertComponent, ModalComponent, UserDeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "./src/_components/alert.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function () { return _alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]; });
            /* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/_components/modal.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function () { return _modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]; });
            /* harmony import */ var _userdelete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userdelete.component */ "./src/_components/userdelete.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDeleteComponent", function () { return _userdelete_component__WEBPACK_IMPORTED_MODULE_3__["UserDeleteComponent"]; });
            /***/ 
        }),
        /***/ "./src/_components/modal.component.less": 
        /*!**********************************************!*\
          !*** ./src/_components/modal.component.less ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\n.jw-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-family: Courier New, Courier;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\n.jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  margin: 20% 10%;\n  text-align: center;\n  border-radius: 5px;\n}\n.jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\n.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9fY29tcG9uZW50cy9tb2RhbC5jb21wb25lbnQubGVzcyIsInNyYy9fY29tcG9uZW50cy9DOi9Vc2Vycy9yb21qYS9Eb2N1bWVudHMvR2l0SHViL0Nyb3dkL0Nyb3dkZnVuZGluZy9Dcm93ZGZ1bmRpbmcuVUkvVUkvc3JjL19jb21wb25lbnRzL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2dDQUNnQztBQ0NoQztFRENFLDhDQUE4QztFQ0M1QyxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlDQUFBO0VEQ0YscURBQXFEO0VDRW5ELGFBQUE7RURBRixzQ0FBc0M7RUNHcEMsY0FBQTtBRERKO0FDR0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRERKO0FDSUE7RURGRSwrQ0FBK0M7RUNJN0MsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RURGRiw0QkFBNEI7RUNLMUIsc0JBQUE7RUFDQSxhQUFBO0VESEYsK0RBQStEO0VDTTdELFlBQUE7QURKSjtBQ09BO0VETEUsNkVBQTZFO0VDTzNFLGdCQUFBO0FETEoiLCJmaWxlIjoic3JjL19jb21wb25lbnRzL21vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5qdy1tb2RhbCB7XG4gIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LWZhbWlseTogQ291cmllciBOZXcsIENvdXJpZXI7XG4gIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICB6LWluZGV4OiAxMDAwO1xuICAvKiBlbmFibGVzIHNjcm9sbGluZyBmb3IgdGFsbCBtb2RhbHMgKi9cbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uanctbW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMjAlIDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uanctbW9kYWwtYmFja2dyb3VuZCB7XG4gIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xuICB6LWluZGV4OiA5MDA7XG59XG4uanctbW9kYWwtb3BlbiB7XG4gIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5qdy1tb2RhbCB7XG4gICAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgQ291cmllcjtcblxuICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgXG4gICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4uanctbW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMjAlIDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uanctbW9kYWwtYmFja2dyb3VuZCB7XG4gICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcblxuICAgIC8qIHNlbWktdHJhbnNwYXJlbnQgYmxhY2sgICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAwLjc1O1xuICAgIFxuICAgIC8qIHotaW5kZXggbXVzdCBiZSBiZWxvdyAuanctbW9kYWwgYW5kIGFib3ZlIGV2ZXJ5dGhpbmcgZWxzZSAgKi9cbiAgICB6LWluZGV4OiA5MDA7XG59XG5cbi5qdy1tb2RhbC1vcGVuIHtcbiAgICAvKiBib2R5IG92ZXJmbG93IGlzIGhpZGRlbiB0byBoaWRlIG1haW4gc2Nyb2xsYmFyIHdoZW4gbW9kYWwgd2luZG93IGlzIG9wZW4gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/_components/modal.component.ts": 
        /*!********************************************!*\
          !*** ./src/_components/modal.component.ts ***!
          \********************************************/
        /*! exports provided: ModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function () { return ModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var ModalComponent = /** @class */ (function () {
                function ModalComponent(formBuilder, userService, alertService, modalService, el) {
                    this.formBuilder = formBuilder;
                    this.userService = userService;
                    this.alertService = alertService;
                    this.modalService = modalService;
                    this.el = el;
                    this.refreshEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.loading = false;
                    this.submitted = false;
                    this.element = el.nativeElement;
                }
                ModalComponent.prototype.ngOnInit = function () {
                    this.delForm = this.formBuilder.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                    var modal = this;
                    if (!this.id) {
                        console.error('modal must have an id');
                        return;
                    }
                    document.body.appendChild(this.element);
                    this.element.addEventListener('click', function (e) {
                        if (e.target.className === 'jw-modal') {
                            modal.close();
                        }
                    });
                    this.modalService.add(this);
                };
                ModalComponent.prototype.ngOnDestroy = function () {
                    this.modalService.remove(this.id);
                    this.element.remove();
                };
                ModalComponent.prototype.onChange = function () {
                    var inpt = document.getElementById('repeatName');
                    if (inpt !== null) {
                        var name = this.delForm.get('name');
                        if (name.value !== inpt.value) {
                            name.setErrors({ MustMatch: true });
                        }
                        else {
                            name.setErrors(null);
                        }
                    }
                };
                ModalComponent.prototype.open = function () {
                    this.element.style.display = 'block';
                };
                ModalComponent.prototype.close = function () {
                    this.element.style.display = 'none';
                };
                ModalComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.onChange();
                    if (this.delForm.controls.name.invalid) {
                        return;
                    }
                    var inpt = document.getElementById('id');
                    var inpt2 = document.getElementById('path');
                    var formData = new FormData();
                    formData.append("path", inpt2.value);
                    this.userService.deleteFile(formData).toPromise()
                        .then(function (data) {
                        _this.userService.deleteProject(parseInt(inpt.value), inpt2.value)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                            .subscribe(function (data) {
                            _this.alertService.success('Project successfully deleted', true);
                            _this.refreshEvent.emit();
                            _this.refreshEvent.next();
                            _this.close();
                        }, function (error) {
                            _this.alertService.error(error);
                            _this.loading = false;
                        });
                    });
                };
                return ModalComponent;
            }());
            ModalComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ModalComponent.prototype, "id", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ModalComponent.prototype, "refreshEvent", void 0);
            ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'jw-modal',
                    template: "<form [formGroup]=\"delForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"jw-modal\">\n            <div class=\"jw-modal-body\">\n                <h2>Please enter a project name to delete </h2>\n                <mat-form-field style=\"padding-right: 5vw;\">\n                    <input matInput placeholder=\"name\" formControlName=\"name\" (change)=\"onChange()\" required>\n                    <mat-hint>Enter your a project name...</mat-hint>\n                    <mat-error *ngIf=\"delForm.controls.name.invalid\">\n                        Project name dont match\n                    </mat-error>\n                </mat-form-field>\n                <ng-content></ng-content>\n                <button [disabled]=\"loading\" mat-raised-button color=\"warn\" >\n                    Delete\n                </button>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>\n    </form>\n    <style>\n        ::ng-deep .mat-hint {\n        color: aliceblue !important;\n      }\n      ::ng-deep .mat-form-field{\n        color: aliceblue;\n      }\n      ::ng-deep .mat-form-field-underline {\n        background-color: aliceblue !important;\n      } \n      ::ng-deep .mat-form-field-label {\n        color: aliceblue !important;\n      }\n      .jw-modal-body {\n        background-color: #3c5172;\n      }\n      h2 {\n        color: aliceblue;\n      }\n    </style>",
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.less */ "./src/_components/modal.component.less")).default]
                })
            ], ModalComponent);
            /***/ 
        }),
        /***/ "./src/_components/userdelete.component.less": 
        /*!***************************************************!*\
          !*** ./src/_components/userdelete.component.less ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* MODAL STYLES\n-------------------------------*/\n.userdelete-modal {\n  /* modal container fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  font-family: Courier New, Courier;\n  /* z-index must be higher than .jw-modal-background */\n  z-index: 1000;\n  /* enables scrolling for tall modals */\n  overflow: auto;\n}\n.jw-modal-body {\n  padding: 20px;\n  background: #fff;\n  margin: 20% 10%;\n  text-align: center;\n  border-radius: 5px;\n}\n.jw-modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  /* semi-transparent black  */\n  background-color: #000;\n  opacity: 0.75;\n  /* z-index must be below .jw-modal and above everything else  */\n  z-index: 900;\n}\n.jw-modal-open {\n  /* body overflow is hidden to hide main scrollbar when modal window is open */\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9fY29tcG9uZW50cy91c2VyZGVsZXRlLmNvbXBvbmVudC5sZXNzIiwic3JjL19jb21wb25lbnRzL0M6L1VzZXJzL3JvbWphL0RvY3VtZW50cy9HaXRIdWIvQ3Jvd2QvQ3Jvd2RmdW5kaW5nL0Nyb3dkZnVuZGluZy5VSS9VSS9zcmMvX2NvbXBvbmVudHMvdXNlcmRlbGV0ZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtnQ0FDZ0M7QUNDaEM7RURDRSw4Q0FBOEM7RUNDNUMsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQ0FBQTtFRENGLHFEQUFxRDtFQ0VuRCxhQUFBO0VEQUYsc0NBQXNDO0VDR3BDLGNBQUE7QURESjtBQ0dBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURESjtBQ0lBO0VERkUsK0NBQStDO0VDSTdDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VERkYsNEJBQTRCO0VDSzFCLHNCQUFBO0VBQ0EsYUFBQTtFREhGLCtEQUErRDtFQ003RCxZQUFBO0FESko7QUNPQTtFRExFLDZFQUE2RTtFQ08zRSxnQkFBQTtBRExKIiwiZmlsZSI6InNyYy9fY29tcG9uZW50cy91c2VyZGVsZXRlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9EQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi51c2VyZGVsZXRlLW1vZGFsIHtcbiAgLyogbW9kYWwgY29udGFpbmVyIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBDb3VyaWVyIE5ldywgQ291cmllcjtcbiAgLyogei1pbmRleCBtdXN0IGJlIGhpZ2hlciB0aGFuIC5qdy1tb2RhbC1iYWNrZ3JvdW5kICovXG4gIHotaW5kZXg6IDEwMDA7XG4gIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5qdy1tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAyMCUgMTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5qdy1tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gIHotaW5kZXg6IDkwMDtcbn1cbi5qdy1tb2RhbC1vcGVuIHtcbiAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCIvKiBNT0RBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnVzZXJkZWxldGUtbW9kYWwge1xuICAgIC8qIG1vZGFsIGNvbnRhaW5lciBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBmb250LWZhbWlseTogQ291cmllciBOZXcsIENvdXJpZXI7XG5cbiAgICAvKiB6LWluZGV4IG11c3QgYmUgaGlnaGVyIHRoYW4gLmp3LW1vZGFsLWJhY2tncm91bmQgKi9cbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIFxuICAgIC8qIGVuYWJsZXMgc2Nyb2xsaW5nIGZvciB0YWxsIG1vZGFscyAqL1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmp3LW1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDIwJSAxMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmp3LW1vZGFsLWJhY2tncm91bmQge1xuICAgIC8qIG1vZGFsIGJhY2tncm91bmQgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAvKiBzZW1pLXRyYW5zcGFyZW50IGJsYWNrICAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBcbiAgICAvKiB6LWluZGV4IG11c3QgYmUgYmVsb3cgLmp3LW1vZGFsIGFuZCBhYm92ZSBldmVyeXRoaW5nIGVsc2UgICovXG4gICAgei1pbmRleDogOTAwO1xufVxuXG4uanctbW9kYWwtb3BlbiB7XG4gICAgLyogYm9keSBvdmVyZmxvdyBpcyBoaWRkZW4gdG8gaGlkZSBtYWluIHNjcm9sbGJhciB3aGVuIG1vZGFsIHdpbmRvdyBpcyBvcGVuICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/_components/userdelete.component.ts": 
        /*!*************************************************!*\
          !*** ./src/_components/userdelete.component.ts ***!
          \*************************************************/
        /*! exports provided: UserDeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDeleteComponent", function () { return UserDeleteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var UserDeleteComponent = /** @class */ (function () {
                function UserDeleteComponent(formBuilder, userService, alertService, modalService, el) {
                    this.formBuilder = formBuilder;
                    this.userService = userService;
                    this.alertService = alertService;
                    this.modalService = modalService;
                    this.el = el;
                    this.refreshEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.loading = false;
                    this.submitted = false;
                    this.element = el.nativeElement;
                }
                UserDeleteComponent.prototype.ngOnInit = function () {
                    this.delForm = this.formBuilder.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    });
                    var modal = this;
                    if (!this.id) {
                        console.error('modal must have an id');
                        return;
                    }
                    document.body.appendChild(this.element);
                    this.element.addEventListener('click', function (e) {
                        if (e.target.className === 'userdelete-modal') {
                            modal.close();
                        }
                    });
                    this.modalService.add(this);
                };
                UserDeleteComponent.prototype.ngOnDestroy = function () {
                    this.modalService.remove(this.id);
                    this.element.remove();
                };
                UserDeleteComponent.prototype.onChange = function () {
                    var inpt = document.getElementById('repeatName');
                    if (inpt !== null) {
                        var name = this.delForm.get('name');
                        if (name.value !== inpt.value) {
                            name.setErrors({ MustMatch: true });
                        }
                        else {
                            name.setErrors(null);
                        }
                    }
                };
                UserDeleteComponent.prototype.open = function () {
                    this.element.style.display = 'block';
                };
                UserDeleteComponent.prototype.close = function () {
                    this.element.style.display = 'none';
                };
                UserDeleteComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (this.delForm.controls.name.invalid) {
                        return;
                    }
                    var inpt = document.getElementById('id');
                    this.userService.delete(parseInt(inpt.value))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('User successfully deleted', true);
                        _this.refreshEvent.emit();
                        _this.close();
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                return UserDeleteComponent;
            }());
            UserDeleteComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UserDeleteComponent.prototype, "id", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], UserDeleteComponent.prototype, "refreshEvent", void 0);
            UserDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'userdelete-modal',
                    template: "<form [formGroup]=\"delForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"userdelete-modal\">\n            <div class=\"jw-modal-body\">\n                <h2>Please enter username to delete </h2>\n                <mat-form-field style=\"padding-right: 5vw;\">\n                    <input matInput placeholder=\"name\" formControlName=\"name\" (change)=\"onChange()\" required>\n                    <mat-hint>Enter your a project name...</mat-hint>\n                    <mat-error *ngIf=\"delForm.controls.name.invalid\">\n                        Username dont match\n                    </mat-error>\n                </mat-form-field>\n                <ng-content></ng-content>\n                <button [disabled]=\"loading\" mat-raised-button color=\"warn\" >\n                    Delete\n                </button>\n            </div>\n        </div>\n        <div class=\"jw-modal-background\"></div>\n    </form>\n        <style>\n        ::ng-deep .mat-hint {\n        color: aliceblue !important;\n      }\n      ::ng-deep .mat-form-field{\n        color: aliceblue;\n      }\n      ::ng-deep .mat-form-field-underline {\n        background-color: aliceblue !important;\n      } \n      ::ng-deep .mat-form-field-label {\n        color: aliceblue !important;\n      }\n      .jw-modal-body {\n        background-color: #3c5172;\n      }\n      h2 {\n        color: aliceblue;\n      }\n    </style>,",
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userdelete.component.less */ "./src/_components/userdelete.component.less")).default]
                })
            ], UserDeleteComponent);
            /***/ 
        }),
        /***/ "./src/_content/app.less": 
        /*!*******************************!*\
          !*** ./src/_content/app.less ***!
          \*******************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9fY29udGVudC9DOi9Vc2Vycy9yb21qYS9Eb2N1bWVudHMvR2l0SHViL0Nyb3dkL0Nyb3dkZnVuZGluZy9Dcm93ZGZ1bmRpbmcuVUkvVUkvc3JjL19jb250ZW50L2FwcC5sZXNzIiwic3JjL19jb250ZW50L2FwcC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9fY29udGVudC9hcHAubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/_helpers/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/_helpers/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router, authenticationService) {
                    this.router = router;
                    this.authenticationService = authenticationService;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser) {
                        return true;
                    }
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/_helpers/error.interceptor.ts": 
        /*!*******************************************!*\
          !*** ./src/_helpers/error.interceptor.ts ***!
          \*******************************************/
        /*! exports provided: ErrorInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return ErrorInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var ErrorInterceptor = /** @class */ (function () {
                function ErrorInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                ErrorInterceptor.prototype.intercept = function (request, next) {
                    var _this = this;
                    return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                        if (err.status === 401) {
                            _this.authenticationService.logout();
                            location.reload(true);
                        }
                        var error = err.error.message || err.statusText;
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                    }));
                };
                return ErrorInterceptor;
            }());
            ErrorInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
            ]; };
            ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ErrorInterceptor);
            /***/ 
        }),
        /***/ "./src/_helpers/fake-backend.ts": 
        /*!**************************************!*\
          !*** ./src/_helpers/fake-backend.ts ***!
          \**************************************/
        /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return FakeBackendInterceptor; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return fakeBackendProvider; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var users = JSON.parse(localStorage.getItem('users')) || [];
            var FakeBackendInterceptor = /** @class */ (function () {
                function FakeBackendInterceptor() {
                }
                FakeBackendInterceptor.prototype.intercept = function (request, next) {
                    var url = request.url, method = request.method, headers = request.headers, body = request.body;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(200))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
                    function handleRoute() {
                        switch (true) {
                            case url.endsWith('/users/authenticate') && method === 'POST':
                                return authenticate();
                            case url.endsWith('/users/register') && method === 'POST':
                                return register();
                            case url.endsWith('/users') && method === 'GET':
                                return getUsers();
                            case url.match(/\/users\/\d+$/) && method === 'DELETE':
                                return deleteUser();
                            case url.match(/\/users\/\d+$/) && method === 'GET':
                                return getUser();
                            case url.endsWith('/users') && method === 'PUT':
                                return update();
                            default:
                                return next.handle(request);
                        }
                    }
                    function authenticate() {
                        var username = body.username, password = body.password;
                        var user = users.find(function (x) { return x.username === username && x.password === password; });
                        if (!user)
                            return error('Username or password is incorrect');
                        return ok({
                            id: user.id,
                            username: user.username,
                            fullName: user.fullName,
                            email: user.email,
                            token: 'fake-jwt-token'
                        });
                    }
                    function register() {
                        var user = body;
                        if (users.find(function (x) { return x.username === user.username; })) {
                            return error('Username "' + user.username + '" is already taken');
                        }
                        user.id = users.length ? Math.max.apply(Math, users.map(function (x) { return x.id; })) + 1 : 1;
                        users.push(user);
                        localStorage.setItem('users', JSON.stringify(users));
                        return ok();
                    }
                    function getUser() {
                        var user = users.filter(function (x) { return x.id === idFromUrl(); });
                        return ok(user);
                    }
                    function update() {
                        var user = body;
                        var oldUser = users.find(function (x) { return x.id === user.id; });
                        if (!oldUser) {
                            return error('User is undefined');
                        }
                        users = users.filter(function (x) { return x.id !== oldUser.id; });
                        if (users.find(function (x) { return x.username === user.username; })) {
                            users.push(oldUser);
                            return error('Username "' + user.username + '" is already taken');
                        }
                        oldUser.fullName = user.fullName;
                        oldUser.email = user.email;
                        oldUser.username = user.username;
                        if (user.password !== '') {
                            oldUser.password = user.password;
                        }
                        users.push(oldUser);
                        localStorage.setItem('users', JSON.stringify(users));
                        return ok();
                    }
                    function getUsers() {
                        if (!isLoggedIn())
                            return unauthorized();
                        return ok(users);
                    }
                    function deleteUser() {
                        if (!isLoggedIn())
                            return unauthorized();
                        users = users.filter(function (x) { return x.id !== idFromUrl(); });
                        localStorage.setItem('users', JSON.stringify(users));
                        return ok();
                    }
                    function ok(body) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
                    }
                    function error(message) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message: message } });
                    }
                    function unauthorized() {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                    }
                    function isLoggedIn() {
                        return headers.get('Authorization') === 'Bearer fake-jwt-token';
                    }
                    function idFromUrl() {
                        var urlParts = url.split('/');
                        return parseInt(urlParts[urlParts.length - 1]);
                    }
                };
                return FakeBackendInterceptor;
            }());
            FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], FakeBackendInterceptor);
            var fakeBackendProvider = {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: FakeBackendInterceptor,
                multi: true
            };
            /***/ 
        }),
        /***/ "./src/_helpers/index.ts": 
        /*!*******************************!*\
          !*** ./src/_helpers/index.ts ***!
          \*******************************/
        /*! exports provided: AuthGuard, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider, JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/_helpers/auth.guard.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });
            /* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "./src/_helpers/error.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });
            /* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "./src/_helpers/fake-backend.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });
            /* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/_helpers/jwt.interceptor.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"]; });
            /***/ 
        }),
        /***/ "./src/_helpers/jwt.interceptor.ts": 
        /*!*****************************************!*\
          !*** ./src/_helpers/jwt.interceptor.ts ***!
          \*****************************************/
        /*! exports provided: JwtInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () { return JwtInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var JwtInterceptor = /** @class */ (function () {
                function JwtInterceptor(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                JwtInterceptor.prototype.intercept = function (request, next) {
                    var currentUser = this.authenticationService.currentUserValue;
                    if (currentUser && currentUser.token) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: "Bearer " + currentUser.token,
                                uname: currentUser.username
                            }
                        });
                    }
                    return next.handle(request);
                };
                return JwtInterceptor;
            }());
            JwtInterceptor.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], JwtInterceptor);
            /***/ 
        }),
        /***/ "./src/_models/index.ts": 
        /*!******************************!*\
          !*** ./src/_models/index.ts ***!
          \******************************/
        /*! exports provided: User, Project */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/_models/user.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function () { return _user__WEBPACK_IMPORTED_MODULE_1__["User"]; });
            /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/_models/project.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function () { return _project__WEBPACK_IMPORTED_MODULE_2__["Project"]; });
            /***/ 
        }),
        /***/ "./src/_models/project.ts": 
        /*!********************************!*\
          !*** ./src/_models/project.ts ***!
          \********************************/
        /*! exports provided: Project */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function () { return Project; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Project = /** @class */ (function () {
                function Project() {
                }
                return Project;
            }());
            /***/ 
        }),
        /***/ "./src/_models/user.ts": 
        /*!*****************************!*\
          !*** ./src/_models/user.ts ***!
          \*****************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User() {
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/_services/alert.service.ts": 
        /*!****************************************!*\
          !*** ./src/_services/alert.service.ts ***!
          \****************************************/
        /*! exports provided: AlertService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function () { return AlertService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var AlertService = /** @class */ (function () {
                function AlertService(router) {
                    var _this = this;
                    this.router = router;
                    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                    this.keepAfterRouteChange = false;
                    this.router.events.subscribe(function (event) {
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                            if (_this.keepAfterRouteChange) {
                                _this.keepAfterRouteChange = false;
                            }
                            else {
                                _this.clear();
                            }
                        }
                    });
                }
                AlertService.prototype.getAlert = function () {
                    return this.subject.asObservable();
                };
                AlertService.prototype.success = function (message, keepAfterRouteChange) {
                    if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
                    this.keepAfterRouteChange = keepAfterRouteChange;
                    this.subject.next({ type: 'success', text: message });
                };
                AlertService.prototype.error = function (message, keepAfterRouteChange) {
                    if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
                    this.keepAfterRouteChange = keepAfterRouteChange;
                    this.subject.next({ type: 'error', text: message });
                };
                AlertService.prototype.clear = function () {
                    this.subject.next();
                };
                return AlertService;
            }());
            AlertService.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AlertService);
            /***/ 
        }),
        /***/ "./src/_services/authentication.service.ts": 
        /*!*************************************************!*\
          !*** ./src/_services/authentication.service.ts ***!
          \*************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
                    this.currentUser = this.currentUserSubject.asObservable();
                }
                Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
                    get: function () {
                        return this.currentUserSubject.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthenticationService.prototype.login = function (username, password) {
                    var _this = this;
                    // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
                    // return this.http.post<any>(`/users/authenticate`, { username, password })
                    return this.http.post("https://crowdfundingidentity20191126012815.azurewebsites.net/api/values/authenticate", { username: username, password: password })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
                        localStorage.setItem('currentUser', JSON.stringify(user));
                        _this.currentUserSubject.next(user);
                        return user;
                    }));
                };
                AuthenticationService.prototype.logout = function () {
                    // remove user from local storage and set current user to null
                    localStorage.removeItem('currentUser');
                    this.currentUserSubject.next(null);
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/_services/index.ts": 
        /*!********************************!*\
          !*** ./src/_services/index.ts ***!
          \********************************/
        /*! exports provided: AlertService, AuthenticationService, UserService, ModalService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/_services/alert.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function () { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/_services/authentication.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/_services/user.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });
            /* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/_services/modal.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function () { return _modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]; });
            /***/ 
        }),
        /***/ "./src/_services/modal.service.ts": 
        /*!****************************************!*\
          !*** ./src/_services/modal.service.ts ***!
          \****************************************/
        /*! exports provided: ModalService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function () { return ModalService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ModalService = /** @class */ (function () {
                function ModalService() {
                    this.modals = [];
                }
                ModalService.prototype.add = function (modal) {
                    this.modals.push(modal);
                };
                ModalService.prototype.remove = function (id) {
                    this.modals = this.modals.filter(function (x) { return x.id !== id; });
                };
                ModalService.prototype.open = function (id) {
                    var modal = this.modals.filter(function (x) { return x.id === id; })[0];
                    modal.open();
                };
                ModalService.prototype.close = function (id) {
                    var modal = this.modals.filter(function (x) { return x.id === id; })[0];
                    modal.close();
                };
                return ModalService;
            }());
            ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], ModalService);
            /***/ 
        }),
        /***/ "./src/_services/user.service.ts": 
        /*!***************************************!*\
          !*** ./src/_services/user.service.ts ***!
          \***************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var url = 'https://crowdfundingidentity20191126012815.azurewebsites.net/api/values/';
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                }
                UserService.prototype.getAll = function () {
                    return this.http.get(url);
                };
                UserService.prototype.register = function (user) {
                    return this.http.post(url + 'register', user);
                };
                UserService.prototype.delete = function (id) {
                    return this.http.delete(url + id);
                };
                UserService.prototype.getUser = function (id) {
                    return this.http.get(url + id);
                };
                UserService.prototype.update = function (user, id) {
                    return this.http.put(url + id, user);
                };
                UserService.prototype.changeRole = function (userName, isAdmin) {
                    return this.http.put(url + 'chrole', { userName: userName, isAdmin: isAdmin });
                };
                UserService.prototype.createProject = function (project) {
                    return this.http.post(url + 'project', project);
                };
                UserService.prototype.deleteProject = function (id, path) {
                    return this.http.delete(url + ("project/" + id));
                };
                UserService.prototype.getProjects = function (userName) {
                    return this.http.get(url + ("projects/" + userName));
                };
                UserService.prototype.getAdminEmails = function () {
                    return this.http.post(url + "getemails", {});
                };
                // For NodeJs
                UserService.prototype.uploadFile = function (file) {
                    return this.http.post('uploadFile', file);
                };
                UserService.prototype.deleteFile = function (fileName) {
                    return this.http.post('deleteFile', fileName);
                };
                UserService.prototype.sendMessage = function (formData) {
                    return this.http.post('sendMessage', formData);
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/admin/admin.component.less": 
        /*!****************************************!*\
          !*** ./src/admin/admin.component.less ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("userdelete-modal {\n  /* modals are hidden by default */\n  display: none;\n}\n@media screen and (max-width: 580px) {\n  .container {\n    overflow-x: scroll;\n  }\n  .mat-cell > * {\n    margin: 0.5vh 2vw;\n  }\n  .mat-cell {\n    padding: 0vh 2vw;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZG1pbi9DOi9Vc2Vycy9yb21qYS9Eb2N1bWVudHMvR2l0SHViL0Nyb3dkL0Nyb3dkZnVuZGluZy9Dcm93ZGZ1bmRpbmcuVUkvVUkvc3JjL2FkbWluL2FkbWluLmNvbXBvbmVudC5sZXNzIiwic3JjL2FkbWluL2FkbWluLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0UsaUNBQWlDO0VEQy9CLGFBQUE7QUNDSjtBRENBO0VBQ0k7SUFDSSxrQkFBQTtFQ0NOO0VEQ0U7SUFDSSxpQkFBQTtFQ0NOO0VEQ0U7SUFDSSxnQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FkbWluL2FkbWluLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsidXNlcmRlbGV0ZS1tb2RhbCB7XG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgfSAgICBcbiAgICAubWF0LWNlbGwgPiAqe1xuICAgICAgICBtYXJnaW46IC41dmggMnZ3O1xuICAgIH1cbiAgICAubWF0LWNlbGwge1xuICAgICAgICBwYWRkaW5nOiAwdmggMnZ3O1xuICAgIH1cbn0iLCJ1c2VyZGVsZXRlLW1vZGFsIHtcbiAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB9XG4gIC5tYXQtY2VsbCA+ICoge1xuICAgIG1hcmdpbjogMC41dmggMnZ3O1xuICB9XG4gIC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMHZoIDJ2dztcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/admin/admin.component.ts": 
        /*!**************************************!*\
          !*** ./src/admin/admin.component.ts ***!
          \**************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var AdminComponent = /** @class */ (function () {
                //@Output() change: EventEmitter<MatSlideToggleChange>
                function AdminComponent(formBuilder, authenticationService, userService, router, alertService, modalService) {
                    this.formBuilder = formBuilder;
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.router = router;
                    this.alertService = alertService;
                    this.modalService = modalService;
                    this.loading = false;
                    this.submitted = false;
                    this.displayedColumns = ['index', 'username', 'fullName', 'email', 'role', 'action'];
                    this.currentUser = this.authenticationService.currentUserValue;
                    this.loadUsers();
                }
                AdminComponent.prototype.ngOnInit = function () { };
                AdminComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this.userService.getAll()
                        .toPromise().then(function (pr) {
                        _this.dataSource = pr;
                        console.log('users loaded');
                    });
                };
                AdminComponent.prototype.refresh = function (event) {
                    this.dataSource = [];
                    this.loadUsers();
                };
                AdminComponent.prototype.openModal = function (id, name) {
                    this.deletedId = id;
                    this.deletedInput = name;
                    this.modalService.open('userdelete');
                };
                AdminComponent.prototype.checked = function (user) {
                    if (user.role === 'Admin') {
                        return true;
                    }
                    return false;
                };
                AdminComponent.prototype.checkedAdmin = function (user) {
                    if (user.username === this.currentUser.username) {
                        return true;
                    }
                    return false;
                };
                AdminComponent.prototype.onChange = function (el, user) {
                    var _this = this;
                    el.source.disabled = true;
                    this.userService.changeRole(user.username, el.checked)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        var message = el.checked ? 'Admin role added successfully' : 'Admin role remove successfully';
                        _this.alertService.success(message, true);
                        _this.router.navigate(['/admin']);
                        el.source.disabled = false;
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.less */ "./src/admin/admin.component.less")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/admin/index.ts": 
        /*!****************************!*\
          !*** ./src/admin/index.ts ***!
          \****************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/admin/admin.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"]; });
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home */ "./src/home/index.ts");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/user/index.ts");
            /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login */ "./src/login/index.ts");
            /* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register */ "./src/register/index.ts");
            /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project */ "./src/project/index.ts");
            /* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cookie */ "./src/cookie/index.ts");
            /* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin */ "./src/admin/index.ts");
            /* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../projectlist */ "./src/projectlist/index.ts");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.ts");
            var routes = [
                { path: '', component: _home__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'user', component: _user__WEBPACK_IMPORTED_MODULE_4__["UserComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'project', component: _project__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
                { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
                { path: 'cookie', component: _cookie__WEBPACK_IMPORTED_MODULE_8__["CookieComponent"] },
                { path: 'admin', component: _admin__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'listprojects/:id', component: _projectlist__WEBPACK_IMPORTED_MODULE_10__["ProjectListComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: '**', redirectTo: '' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.less": 
        /*!************************************!*\
          !*** ./src/app/app.component.less ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-link {\n  color: #e9fff8;\n  font-size: 1.3rem;\n  padding: 0 2vw 0 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.men-link {\n  padding: 0 2vw;\n  border-radius: 4px;\n  border: 1px solid #673ab7;\n  transition: all 0.2s ease-in-out;\n}\n.men-link:hover {\n  outline: -webkit-focus-ring-color auto 1px;\n  transform: translateY(5px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.65);\n}\n.toggle_btn {\n  transition: 0.4s;\n}\n@media screen and (max-width: 550px) {\n  .logo_n {\n    font-size: 1rem !important;\n  }\n  .logo_n > span {\n    font-size: 0.75rem !important;\n  }\n}\na.mobile:focus {\n  outline: 0 !important;\n  outline-offset: 0 !important;\n  outline-width: 0 !important;\n  border: none;\n}\na.mobile:active,\na.mobile:focus {\n  outline: 0 !important;\n  outline-offset: 0 !important;\n}\na.mobile::-moz-focus-inner {\n  border: 0 !important;\n}\nbutton:active,\nbutton:focus {\n  outline: 0 !important;\n  outline-offset: 0 !important;\n}\nbutton::-moz-focus-inner {\n  border: 0 !important;\n}\na.mobile {\n  border: none !important;\n  height: 60px !important;\n  margin: 5px 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvcm9tamEvRG9jdW1lbnRzL0dpdEh1Yi9Dcm93ZC9Dcm93ZGZ1bmRpbmcvQ3Jvd2RmdW5kaW5nLlVJL1VJL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FERUE7RUFDRSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMENBQUE7QUNBRjtBREVBO0VBQ0UsZ0JBQUE7QUNBRjtBREVBO0VBQ0U7SUFDSSwwQkFBQTtFQ0FKO0VERUE7SUFDSSw2QkFBQTtFQ0FKO0FBQ0Y7QURHQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNERjtBREdBOztFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7QUNBRjtBREVBO0VBQ0Usb0JBQUE7QUNBRjtBREVBOztFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBRENBO0VBQ0Usb0JBQUE7QUNDRjtBRENBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xuICBjb2xvcjogI2U5ZmZmODtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBhZGRpbmc6IDAgMnZ3IDAgMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVuLWxpbmsge1xuICBwYWRkaW5nOiAwIDJ2dztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjczYWI3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tZW4tbGluazpob3ZlciB7XG4gIG91dGxpbmU6IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBhdXRvIDFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjY1KTtcbn1cbi50b2dnbGVfYnRuIHtcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmxvZ29fbiB7XG4gICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAubG9nb19uID4gc3BhbiB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuXG5hLm1vYmlsZTpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDAgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5hLm1vYmlsZTphY3RpdmUsIGEubW9iaWxlOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICBvdXRsaW5lLW9mZnNldDogMCAhaW1wb3J0YW50O1xufVxuYS5tb2JpbGU6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDAgIWltcG9ydGFudDtcbn1cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuYS5tb2JpbGUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG59IiwiLm5hdi1saW5rIHtcbiAgY29sb3I6ICNlOWZmZjg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBwYWRkaW5nOiAwIDJ2dyAwIDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW4tbGluayB7XG4gIHBhZGRpbmc6IDAgMnZ3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NzNhYjc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLm1lbi1saW5rOmhvdmVyIHtcbiAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xufVxuLnRvZ2dsZV9idG4ge1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmxvZ29fbiB7XG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxvZ29fbiA+IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5hLm1vYmlsZTpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDAgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5hLm1vYmlsZTphY3RpdmUsXG5hLm1vYmlsZTpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgb3V0bGluZS1vZmZzZXQ6IDAgIWltcG9ydGFudDtcbn1cbmEubW9iaWxlOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5idXR0b246YWN0aXZlLFxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICBvdXRsaW5lLW9mZnNldDogMCAhaW1wb3J0YW50O1xufVxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5hLm1vYmlsZSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            /* harmony import */ var _content_app_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_content/app.less */ "./src/_content/app.less");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, authenticationService) {
                    var _this = this;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
                }
                Object.defineProperty(AppComponent.prototype, "isAuth", {
                    get: function () { return this.authenticationService.currentUserValue === null; },
                    enumerable: true,
                    configurable: true
                });
                ;
                AppComponent.prototype.logout = function () {
                    this.authenticationService.logout();
                    this.router.navigate(['/']);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers */ "./src/_helpers/index.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user */ "./src/user/index.ts");
            /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login */ "./src/login/index.ts");
            /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home */ "./src/home/index.ts");
            /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../project */ "./src/project/index.ts");
            /* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../register */ "./src/register/index.ts");
            /* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cookie */ "./src/cookie/index.ts");
            /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_components */ "./src/_components/index.ts");
            /* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../admin */ "./src/admin/index.ts");
            /* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../projectlist */ "./src/projectlist/index.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
            // import { fakeBackendProvider } from '../_helpers';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_26__["CdkTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"]
                    ],
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                        _cookie__WEBPACK_IMPORTED_MODULE_14__["CookieComponent"],
                        _user__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                        _login__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                        _project__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
                        _register__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"],
                        _home__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"],
                        _admin__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_15__["UserDeleteComponent"],
                        _projectlist__WEBPACK_IMPORTED_MODULE_17__["ProjectListComponent"]
                    ],
                    providers: [
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
                        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"], multi: true },
                        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
                        // fakeBackendProvider
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
                })
            ], AppModule);
            ;
            /***/ 
        }),
        /***/ "./src/cookie/cookie.component.ts": 
        /*!****************************************!*\
          !*** ./src/cookie/cookie.component.ts ***!
          \****************************************/
        /*! exports provided: CookieComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieComponent", function () { return CookieComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CookieComponent = /** @class */ (function () {
                function CookieComponent() {
                }
                CookieComponent.prototype.ngOnInit = function () {
                };
                return CookieComponent;
            }());
            CookieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cookie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/cookie/cookie.component.html")).default
                })
            ], CookieComponent);
            /***/ 
        }),
        /***/ "./src/cookie/index.ts": 
        /*!*****************************!*\
          !*** ./src/cookie/index.ts ***!
          \*****************************/
        /*! exports provided: CookieComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _cookie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie.component */ "./src/cookie/cookie.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieComponent", function () { return _cookie_component__WEBPACK_IMPORTED_MODULE_1__["CookieComponent"]; });
            /***/ 
        }),
        /***/ "./src/environments/dev.ts": 
        /*!*********************************!*\
          !*** ./src/environments/dev.ts ***!
          \*********************************/
        /*! exports provided: dev */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dev", function () { return dev; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var dev = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/environments/index.ts": 
        /*!***********************************!*\
          !*** ./src/environments/index.ts ***!
          \***********************************/
        /*! exports provided: dev, prod */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev */ "./src/environments/dev.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dev", function () { return _dev__WEBPACK_IMPORTED_MODULE_1__["dev"]; });
            /* harmony import */ var _prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prod */ "./src/environments/prod.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prod", function () { return _prod__WEBPACK_IMPORTED_MODULE_2__["prod"]; });
            /***/ 
        }),
        /***/ "./src/environments/prod.ts": 
        /*!**********************************!*\
          !*** ./src/environments/prod.ts ***!
          \**********************************/
        /*! exports provided: prod */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prod", function () { return prod; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var prod = {
                production: true
            };
            /***/ 
        }),
        /***/ "./src/home/home.component.less": 
        /*!**************************************!*\
          !*** ./src/home/home.component.less ***!
          \**************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main-back {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: calc(100% - 70px);\n  overflow: hidden;\n}\n.img-back {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/main-back.gif\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.back-container {\n  width: 70%;\n  height: 80%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.back-container > div {\n  height: 400px;\n  width: 50%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  margin: 2vh 2vw;\n  padding: 0 2vw;\n  border-radius: 4px;\n  border: 1px solid #673ab7;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.back-container > div:nth-child(1):hover {\n  outline: -webkit-focus-ring-color auto 1px;\n  transform: translateY(10px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.65);\n}\n.filter-back-cont {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  border-radius: 4px;\n  z-index: -1;\n  background-color: rgba(45, 108, 125, 0.5);\n}\n.back-container > div > a {\n  text-align: center;\n  color: white;\n  text-shadow: 1px 1px 2px #2f3168, -1px 2px 3px #bcffe2;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.back-container > div > p {\n  color: white;\n  font-family: monospace;\n  line-height: 2.2rem;\n  text-align: center;\n}\n.back-container > div > h2 {\n  color: white;\n  text-shadow: 1px 1px 2px #2f3168, -1px 2px 3px #bcffe2;\n  margin: 0 0 5vh 0;\n  text-align: center;\n}\n@media screen and (max-width: 980px) {\n  .back-container > div {\n    width: 100% !important;\n    height: 400px;\n    -webkit-animation-play-state: paused !important;\n            animation-play-state: paused !important;\n  }\n  .back-container > div > h2 {\n    text-align: center;\n  }\n  .back-container {\n    flex-wrap: wrap-reverse;\n    min-height: 100%;\n    align-items: normal !important;\n  }\n  .main-back {\n    min-height: 900px !important;\n  }\n}\n@media screen and (max-width: 550px) {\n  .back-container > div > a {\n    font-size: 2rem !important;\n  }\n  .back-container > div > p {\n    line-height: 1.7rem;\n    font-size: 1.1rem !important;\n  }\n  .back-container > div > h2 {\n    margin: 0 0 3vh 0;\n    font-size: 1.8rem !important;\n  }\n  .back-container > div {\n    height: 300px;\n  }\n  .main-back {\n    min-height: 700px !important;\n  }\n}\n.back-container > div:nth-child(1) {\n  animation: left 0.7s ease-in 0s 1 normal none;\n  -webkit-animation: left 0.7s ease-in 0s 1 normal none;\n}\n@-webkit-keyframes left {\n  0% {\n    transform: translateX(0%);\n  }\n  35% {\n    transform: translateX(-60%);\n  }\n  70% {\n    transform: translateX(6%);\n  }\n  71% {\n    transform: translateX(6%) scaleY(1);\n  }\n  85% {\n    transform: translateX(6.5%) scaleY(1.1);\n  }\n  97% {\n    transform: translateX(-2%) scaleY(1);\n  }\n}\n@keyframes left {\n  0% {\n    transform: translateX(0%);\n  }\n  35% {\n    transform: translateX(-60%);\n  }\n  70% {\n    transform: translateX(6%);\n  }\n  71% {\n    transform: translateX(6%) scaleY(1);\n  }\n  85% {\n    transform: translateX(6.5%) scaleY(1.1);\n  }\n  97% {\n    transform: translateX(-2%) scaleY(1);\n  }\n}\n.back-container > div:nth-child(2) {\n  animation: right 0.7s ease-in 0s 1 normal none;\n  -webkit-animation: right 0.7s ease-in 0s 1 normal none;\n}\n@-webkit-keyframes right {\n  0% {\n    transform: translateX(0%);\n  }\n  35% {\n    transform: translateX(60%);\n  }\n  70% {\n    transform: translateX(-6%);\n  }\n  71% {\n    transform: translateX(-6%) scaleY(1);\n  }\n  85% {\n    transform: translateX(-6.5%) scaleY(1.1);\n  }\n  97% {\n    transform: translateX(2%) scaleY(1);\n  }\n}\n@keyframes right {\n  0% {\n    transform: translateX(0%);\n  }\n  35% {\n    transform: translateX(60%);\n  }\n  70% {\n    transform: translateX(-6%);\n  }\n  71% {\n    transform: translateX(-6%) scaleY(1);\n  }\n  85% {\n    transform: translateX(-6.5%) scaleY(1.1);\n  }\n  97% {\n    transform: translateX(2%) scaleY(1);\n  }\n}\n.info-container {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  position: relative;\n}\n.info-container > div {\n  width: 50%;\n  position: relative;\n}\nmat-tab-group {\n  color: white;\n  background-color: #23155f;\n  background-image: linear-gradient(35deg, #64b491 0%, #3c5172 40%, #23155f 90%);\n}\nmat-tab-group p {\n  margin: 10vh 5vw 7vh 5vw;\n  font-family: monospace;\n  font-size: 1.7rem;\n}\nmat-tab-group ul > li {\n  margin: 3vh 5vw;\n  font-family: monospace;\n  font-size: 1.5rem;\n}\nmat-tab-group ul {\n  list-style-type: square;\n}\n.info-container h1 {\n  margin: 0;\n  padding: 4vh;\n  text-align: center;\n  background-color: #23155f;\n  background-image: linear-gradient(172deg, #64b491 0%, #3c5172 40%, #23155f 90%);\n  color: white;\n}\n.right-info {\n  padding: 4vh 4vw;\n  width: 60%;\n  height: 60%;\n  border-radius: 4px;\n  border: 1px solid #64c391;\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  background-color: rgba(45, 108, 125, 0.5);\n}\n.right-info > h1 {\n  background-color: rgba(255, 255, 255, 0);\n  background-image: none;\n}\n.right-info > p {\n  font-family: monospace;\n  font-size: 1.7rem;\n  color: white;\n}\n.tab-right-bck {\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n#one-t {\n  background-image: url(\"/assets/1.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: none;\n}\n#two-t {\n  background-image: url(\"/assets/3.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: none;\n}\n#three-t {\n  background-image: url(\"/assets/4.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: none;\n}\n@media screen and (max-width: 980px) {\n  .info-container > div {\n    width: 100%;\n  }\n  mat-tab-group {\n    padding: 0 4vw 0 4vw;\n  }\n  .tab-right-bck {\n    padding: 0 2vw;\n  }\n  .feedback h1 {\n    font-size: 1.8rem;\n  }\n  .tab-right-bck {\n    min-height: 500px;\n  }\n}\n@media screen and (max-width: 580px) {\n  mat-tab-group ul {\n    -webkit-padding-start: 1vw;\n            padding-inline-start: 1vw;\n  }\n  .right-info {\n    width: 80%;\n    margin: 4vh 1vw;\n    height: 40%;\n    text-align: center;\n  }\n  .right-info > p {\n    font-size: 1.1rem;\n  }\n  mat-tab-group p {\n    font-size: 1.2rem;\n  }\n  mat-tab-group ul > li {\n    font-size: 1.3rem;\n  }\n  .info-container h1 {\n    font-size: 1.5rem;\n  }\n}\n.feedback {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  min-height: 50%;\n  width: 100%;\n  flex-wrap: wrap;\n  background-color: #23155f;\n  background-image: linear-gradient(90deg, #64b491 0%, #3c5172 40%, #23155f 90%);\n}\n.feedback > form {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n  min-height: 80%;\n  min-width: 40%;\n  margin: 5vh 2vw;\n  background-color: rgba(100, 85, 145, 0.1);\n  padding-bottom: 4vh;\n  border-style: solid;\n  border-image-source: linear-gradient(-90deg, #64b491 0%, #3c5172 40%, #23155f 90%);\n  border-image-slice: 1;\n  border-image-width: 2;\n}\n.feedback h1 {\n  margin: 0;\n  padding: 4vh 1vw;\n  text-align: center;\n  color: white;\n}\n@media screen and (max-width: 580px) {\n  .feedback h1 {\n    font-size: 1.2rem;\n    padding: 4vh 3vw;\n  }\n}\n.feedback textarea {\n  height: 100px;\n}\n.f-control {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 2vh 0vw;\n}\n.f-control > * {\n  width: 80%;\n}\n::ng-deep .feedback .mat-hint {\n  color: aliceblue !important;\n}\n::ng-deep .feedback .mat-form-field {\n  color: aliceblue;\n}\n::ng-deep .feedback .mat-form-field-underline {\n  background-color: aliceblue !important;\n}\n::ng-deep .feedback .mat-form-field-label {\n  color: aliceblue !important;\n}\n::ng-deep .mat-tab-header > .mat-tab-header-pagination > .mat-tab-header-pagination-chevron {\n  border-color: white !important;\n}\n.footer {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  min-height: 25%;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.footer > div:nth-child(2) {\n  padding: 2vh 5vw;\n}\n.footer > div > p {\n  margin: 4vh 4vw;\n  font-size: 0.7rem;\n  color: white;\n}\n.footer > div:nth-child(1) {\n  background-image: url(\"/assets/footer.jpg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  z-index: -1;\n  -webkit-filter: brightness(0.3);\n          filter: brightness(0.3);\n}\n.cookie-show {\n  display: flex;\n  position: fixed;\n  z-index: 10;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n  padding: 2vh 2vw;\n  font-size: 0.7rem;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.cookie {\n  bottom: -100% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9ob21lL0M6L1VzZXJzL3JvbWphL0RvY3VtZW50cy9HaXRIdWIvQ3Jvd2QvQ3Jvd2RmdW5kaW5nL0Nyb3dkZnVuZGluZy5VSS9VSS9zcmMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic3JjL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0o7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0FKO0FERUE7RUFDSSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMENBQUE7QUNBSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtBQ0FKO0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtFQUNBLGdEQUFBO0FDQUo7QURFQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVBO0VBQ0ksWUFBQTtFQUNBLHNEQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSTtJQUNJLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7RUNETjtFREdFO0lBQ0ksa0JBQUE7RUNETjtFREdFO0lBQ0ksdUJBQUE7SUFDQSxnQkFBQTtJQUNBLDhCQUFBO0VDRE47RURHRTtJQUNJLDRCQUFBO0VDRE47QUFDRjtBREdBO0VBQ0k7SUFDSSwwQkFBQTtFQ0ROO0VER0U7SUFDSSxtQkFBQTtJQUNBLDRCQUFBO0VDRE47RURHRTtJQUNJLGlCQUFBO0lBQ0EsNEJBQUE7RUNETjtFREdFO0lBQ0ksYUFBQTtFQ0ROO0VER0U7SUFDSSw0QkFBQTtFQ0ROO0FBQ0Y7QURJQTtFQUNJLDZDQUFBO0VBQ0EscURBQUE7QUNGSjtBRElBO0VBQ0k7SUFBSyx5QkFBQTtFQ0RQO0VERUU7SUFBTSwyQkFBQTtFQ0NSO0VEQUU7SUFBTSx5QkFBQTtFQ0dSO0VERkU7SUFBTSxtQ0FBQTtFQ0tSO0VESkU7SUFBTSx1Q0FBQTtFQ09SO0VETkU7SUFBTSxvQ0FBQTtFQ1NSO0FBQ0Y7QURSQTtFQUNJO0lBQUsseUJBQUE7RUNXUDtFRFZFO0lBQU0sMkJBQUE7RUNhUjtFRFpFO0lBQU0seUJBQUE7RUNlUjtFRGRFO0lBQU0sbUNBQUE7RUNpQlI7RURoQkU7SUFBTSx1Q0FBQTtFQ21CUjtFRGxCRTtJQUFNLG9DQUFBO0VDcUJSO0FBQ0Y7QURwQkE7RUFDSSw4Q0FBQTtFQUNBLHNEQUFBO0FDc0JKO0FEcEJBO0VBQ0k7SUFBSyx5QkFBQTtFQ3VCUDtFRHRCRTtJQUFNLDBCQUFBO0VDeUJSO0VEeEJFO0lBQU0sMEJBQUE7RUMyQlI7RUQxQkU7SUFBTSxvQ0FBQTtFQzZCUjtFRDVCRTtJQUFNLHdDQUFBO0VDK0JSO0VEOUJFO0lBQU0sbUNBQUE7RUNpQ1I7QUFDRjtBRGhDQTtFQUNJO0lBQUsseUJBQUE7RUNtQ1A7RURsQ0U7SUFBTSwwQkFBQTtFQ3FDUjtFRHBDRTtJQUFNLDBCQUFBO0VDdUNSO0VEdENFO0lBQU0sb0NBQUE7RUN5Q1I7RUR4Q0U7SUFBTSx3Q0FBQTtFQzJDUjtFRDFDRTtJQUFNLG1DQUFBO0VDNkNSO0FBQ0Y7QUQxQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQzRDSjtBRDFDQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQzRDSjtBRDFDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhFQUFBO0FDNENKO0FEMUNBO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDNENKO0FEMUNBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUM0Q0o7QUQxQ0E7RUFDSSx1QkFBQTtBQzRDSjtBRDFDQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLCtFQUFBO0VBQ0EsWUFBQTtBQzRDSjtBRHpDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0FDMkNKO0FEekNBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtBQzJDSjtBRHpDQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDMkNKO0FEekNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQzJDSjtBRHpDQTtFQUNJLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQzJDSjtBRHpDQTtFQUNJLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQzJDSjtBRHpDQTtFQUNJLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQzJDSjtBRHpDQTtFQUNJO0lBQ0ksV0FBQTtFQzJDTjtFRHpDRTtJQUNJLG9CQUFBO0VDMkNOO0VEekNFO0lBQ0ksY0FBQTtFQzJDTjtFRHpDRTtJQUNJLGlCQUFBO0VDMkNOO0VEekNFO0lBQ0ksaUJBQUE7RUMyQ047QUFDRjtBRHpDQTtFQUNJO0lBQ0ksMEJBQUE7WUFBQSx5QkFBQTtFQzJDTjtFRHpDRTtJQUNJLFVBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDMkNOO0VEekNFO0lBQ0ksaUJBQUE7RUMyQ047RUR6Q0U7SUFDSSxpQkFBQTtFQzJDTjtFRHpDRTtJQUNJLGlCQUFBO0VDMkNOO0VEekNFO0lBQ0ksaUJBQUE7RUMyQ047QUFDRjtBRHZDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhFQUFBO0FDeUNKO0FEdkNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0ZBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDeUNKO0FEdkNBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDeUNKO0FEdkNBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0VDeUNOO0FBQ0Y7QUR2Q0E7RUFDSSxhQUFBO0FDeUNKO0FEdkNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUN5Q0o7QUR2Q0E7RUFDSSxVQUFBO0FDeUNKO0FEdkNBO0VBQ0ksMkJBQUE7QUN5Q0o7QUR2Q0E7RUFDSSxnQkFBQTtBQ3lDSjtBRHZDQTtFQUNJLHNDQUFBO0FDeUNKO0FEdkNBO0VBQ0ksMkJBQUE7QUN5Q0o7QUR2Q0E7RUFDSSw4QkFBQTtBQ3lDSjtBRHJDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN1Q0o7QURyQ0E7RUFDSSxnQkFBQTtBQ3VDSjtBRHJDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN1Q0o7QURyQ0E7RUFDSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUN1Q0o7QURwQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNzQ0o7QURwQ0E7RUFDSSx3QkFBQTtBQ3NDSiIsImZpbGUiOiJzcmMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmFjayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nLWJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9tYWluLWJhY2suZ2lmXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJhY2stY29udGFpbmVyID4gZGl2IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJ2aCAydnc7XG4gICAgcGFkZGluZzogMCAydnc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NzNhYjc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmJhY2stY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKTpob3ZlciB7XG4gICAgb3V0bGluZTogLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGF1dG8gMXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG4uZmlsdGVyLWJhY2stY29udCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxMDgsIDEyNSwgMC41KTtcbn1cbi5iYWNrLWNvbnRhaW5lciA+IGRpdiA+IGEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMyZjMxNjgsIC0xcHggMnB4IDNweCAjYmNmZmUyO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5iYWNrLWNvbnRhaW5lciA+IGRpdiA+IHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhY2stY29udGFpbmVyID4gZGl2ID4gaDIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzJmMzE2OCwgLTFweCAycHggM3B4ICNiY2ZmZTI7XG4gICAgbWFyZ2luOiAwIDAgNXZoIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuICAgIC5iYWNrLWNvbnRhaW5lciA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJhY2stY29udGFpbmVyID4gZGl2ID4gaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5iYWNrLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tYWluLWJhY2sge1xuICAgICAgICBtaW4taGVpZ2h0OiA5MDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICAgLmJhY2stY29udGFpbmVyID4gZGl2ID4gYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYmFjay1jb250YWluZXIgPiBkaXYgPiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJhY2stY29udGFpbmVyID4gZGl2ID4gaDIge1xuICAgICAgICBtYXJnaW46IDAgMCAzdmggMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJhY2stY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG4gICAgLm1haW4tYmFjayB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uYmFjay1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb246IGxlZnQgLjdzIGVhc2UtaW4gMHMgMSBub3JtYWwgbm9uZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbGVmdCAuN3MgZWFzZS1pbiAwcyAxIG5vcm1hbCBub25lO1xuICB9XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO31cbiAgICAzNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYwJSk7fVxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2JSl9XG4gICAgNzElIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYlKSBzY2FsZVkoMSk7fVxuICAgIDg1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2LjUlKSBzY2FsZVkoMS4xKTt9XG4gICAgOTclIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yJSkgc2NhbGVZKDEpO31cbiAgfVxuQGtleWZyYW1lcyBsZWZ0IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxuICAgIDM1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjAlKTt9XG4gICAgNzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYlKX1cbiAgICA3MSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNiUpIHNjYWxlWSgxKTt9XG4gICAgODUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYuNSUpIHNjYWxlWSgxLjEpO31cbiAgICA5NyUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIlKSBzY2FsZVkoMSk7fVxufVxuLmJhY2stY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uOiByaWdodCAuN3MgZWFzZS1pbiAwcyAxIG5vcm1hbCBub25lO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodCAuN3MgZWFzZS1pbiAwcyAxIG5vcm1hbCBub25lO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxuICAgIDM1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2MCUpO31cbiAgICA3MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYlKX1cbiAgICA3MSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYlKSBzY2FsZVkoMSk7fVxuICAgIDg1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNi41JSkgc2NhbGVZKDEuMSk7fVxuICAgIDk3JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyJSkgc2NhbGVZKDEpO31cbn1cbkBrZXlmcmFtZXMgcmlnaHQge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTt9XG4gICAgMzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwJSk7fVxuICAgIDcwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNiUpfVxuICAgIDcxJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNiUpIHNjYWxlWSgxKTt9XG4gICAgODUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02LjUlKSBzY2FsZVkoMS4xKTt9XG4gICAgOTclIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIlKSBzY2FsZVkoMSk7fVxufVxuXG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluZm8tY29udGFpbmVyID4gZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm1hdC10YWItZ3JvdXAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMxNTVmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzNWRlZywgIzY0YjQ5MSAwJSwgIzNjNTE3MiA0MCUsICMyMzE1NWYgOTAlKTtcbn1cbm1hdC10YWItZ3JvdXAgcCB7XG4gICAgbWFyZ2luOiAxMHZoIDV2dyA3dmggNXZ3O1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG59XG5tYXQtdGFiLWdyb3VwIHVsID4gbGkge1xuICAgIG1hcmdpbjogM3ZoIDV2dztcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxubWF0LXRhYi1ncm91cCB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG59XG4uaW5mby1jb250YWluZXIgaDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDR2aDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMTU1ZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCAjNjRiNDkxIDAlLCAjM2M1MTcyIDQwJSwgIzIzMTU1ZiA5MCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0LWluZm8geyAgICBcbiAgICBwYWRkaW5nOiA0dmggNHZ3O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA2MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NGMzOTE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgMTA4LCAxMjUsIDAuNSk7XG59XG4ucmlnaHQtaW5mbyA+IGgxe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbi5yaWdodC1pbmZvID4gcCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udGFiLXJpZ2h0LWJjayB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jb25lLXQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvMS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuI3R3by10IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzLzMuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiN0aHJlZS10IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzLzQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gICAgLmluZm8tY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIG1hdC10YWItZ3JvdXAge1xuICAgICAgICBwYWRkaW5nOiAwIDR2dyAwIDR2dztcbiAgICB9XG4gICAgLnRhYi1yaWdodC1iY2sge1xuICAgICAgICBwYWRkaW5nOiAwIDJ2dztcbiAgICB9XG4gICAgLmZlZWRiYWNrIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICAgIC50YWItcmlnaHQtYmNrIHtcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgICBtYXQtdGFiLWdyb3VwIHVsIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDF2dztcbiAgICB9XG4gICAgLnJpZ2h0LWluZm8ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBtYXJnaW46IDR2aCAxdnc7XG4gICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5yaWdodC1pbmZvID4gcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgICBtYXQtdGFiLWdyb3VwIHAge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgbWF0LXRhYi1ncm91cCB1bCA+IGxpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuICAgIC5pbmZvLWNvbnRhaW5lciBoMXtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufVxuXG5cbi5mZWVkYmFjayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMTU1ZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2NGI0OTEgMCUsICMzYzUxNzIgNDAlLCAjMjMxNTVmIDkwJSk7XG59XG4uZmVlZGJhY2sgPiBmb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDgwJTtcbiAgICBtaW4td2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDV2aCAydnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDg1LCAxNDUsIDAuMSk7XG4gICAgcGFkZGluZy1ib3R0b206IDR2aDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IGxpbmVhci1ncmFkaWVudCgtOTBkZWcsICM2NGI0OTEgMCUsICMzYzUxNzIgNDAlLCAjMjMxNTVmIDkwJSk7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICAgIGJvcmRlci1pbWFnZS13aWR0aDogMjtcbn1cbi5mZWVkYmFjayBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDR2aCAxdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gICAgLmZlZWRiYWNrIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIHBhZGRpbmc6IDR2aCAzdnc7XG4gICAgfVxufVxuLmZlZWRiYWNrIHRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuLmYtY29udHJvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJ2aCAwdnc7XG59XG4uZi1jb250cm9sID4gKntcbiAgICB3aWR0aDogODAlO1xufVxuOjpuZy1kZWVwIC5mZWVkYmFjayAubWF0LWhpbnQge1xuICAgIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZmVlZGJhY2sgLm1hdC1mb3JtLWZpZWxke1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG46Om5nLWRlZXAgLmZlZWRiYWNrIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xufSBcbjo6bmctZGVlcCAuZmVlZGJhY2sgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cblxuLmZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDI1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZm9vdGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgcGFkZGluZzogMnZoIDV2dztcbn1cbi5mb290ZXIgPiBkaXYgPiBwIHtcbiAgICBtYXJnaW46IDR2aCA0dnc7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdGVyID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9mb290ZXIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC4zKTtcbn1cblxuLmNvb2tpZS1zaG93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDJ2aCAydnc7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmNvb2tpZSB7XG4gICAgYm90dG9tOiAtMTAwJSAhaW1wb3J0YW50O1xufSIsIi5tYWluLWJhY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWctYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWFpbi1iYWNrLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmJhY2stY29udGFpbmVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmFjay1jb250YWluZXIgPiBkaXYge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMnZoIDJ2dztcbiAgcGFkZGluZzogMCAydnc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3M2FiNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5iYWNrLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSk6aG92ZXIge1xuICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byAxcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xufVxuLmZpbHRlci1iYWNrLWNvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDEwOCwgMTI1LCAwLjUpO1xufVxuLmJhY2stY29udGFpbmVyID4gZGl2ID4gYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzJmMzE2OCwgLTFweCAycHggM3B4ICNiY2ZmZTI7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbn1cbi5iYWNrLWNvbnRhaW5lciA+IGRpdiA+IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5iYWNrLWNvbnRhaW5lciA+IGRpdiA+IGgyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzJmMzE2OCwgLTFweCAycHggM3B4ICNiY2ZmZTI7XG4gIG1hcmdpbjogMCAwIDV2aCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xuICAuYmFjay1jb250YWluZXIgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJhY2stY29udGFpbmVyID4gZGl2ID4gaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYmFjay1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG4gIC5tYWluLWJhY2sge1xuICAgIG1pbi1oZWlnaHQ6IDkwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5iYWNrLWNvbnRhaW5lciA+IGRpdiA+IGEge1xuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5iYWNrLWNvbnRhaW5lciA+IGRpdiA+IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjdyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuYmFjay1jb250YWluZXIgPiBkaXYgPiBoMiB7XG4gICAgbWFyZ2luOiAwIDAgM3ZoIDA7XG4gICAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuYmFjay1jb250YWluZXIgPiBkaXYge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbiAgLm1haW4tYmFjayB7XG4gICAgbWluLWhlaWdodDogNzAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLmJhY2stY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbjogbGVmdCAwLjdzIGVhc2UtaW4gMHMgMSBub3JtYWwgbm9uZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxlZnQgMC43cyBlYXNlLWluIDBzIDEgbm9ybWFsIG5vbmU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MCUpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYlKTtcbiAgfVxuICA3MSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2JSkgc2NhbGVZKDEpO1xuICB9XG4gIDg1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYuNSUpIHNjYWxlWSgxLjEpO1xuICB9XG4gIDk3JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yJSkgc2NhbGVZKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxuICAzNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNjAlKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2JSk7XG4gIH1cbiAgNzElIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNiUpIHNjYWxlWSgxKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2LjUlKSBzY2FsZVkoMS4xKTtcbiAgfVxuICA5NyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMiUpIHNjYWxlWSgxKTtcbiAgfVxufVxuLmJhY2stY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbjogcmlnaHQgMC43cyBlYXNlLWluIDBzIDEgbm9ybWFsIG5vbmU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodCAwLjdzIGVhc2UtaW4gMHMgMSBub3JtYWwgbm9uZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyByaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwJSk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYlKTtcbiAgfVxuICA3MSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNiUpIHNjYWxlWSgxKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNi41JSkgc2NhbGVZKDEuMSk7XG4gIH1cbiAgOTclIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMiUpIHNjYWxlWSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyByaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDYwJSk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTYlKTtcbiAgfVxuICA3MSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNiUpIHNjYWxlWSgxKTtcbiAgfVxuICA4NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNi41JSkgc2NhbGVZKDEuMSk7XG4gIH1cbiAgOTclIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMiUpIHNjYWxlWSgxKTtcbiAgfVxufVxuLmluZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluZm8tY29udGFpbmVyID4gZGl2IHtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWF0LXRhYi1ncm91cCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMTU1ZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjNjRiNDkxIDAlLCAjM2M1MTcyIDQwJSwgIzIzMTU1ZiA5MCUpO1xufVxubWF0LXRhYi1ncm91cCBwIHtcbiAgbWFyZ2luOiAxMHZoIDV2dyA3dmggNXZ3O1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cbm1hdC10YWItZ3JvdXAgdWwgPiBsaSB7XG4gIG1hcmdpbjogM3ZoIDV2dztcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5tYXQtdGFiLWdyb3VwIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG59XG4uaW5mby1jb250YWluZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDR2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMxNTVmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCAjNjRiNDkxIDAlLCAjM2M1MTcyIDQwJSwgIzIzMTU1ZiA5MCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucmlnaHQtaW5mbyB7XG4gIHBhZGRpbmc6IDR2aCA0dnc7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NGMzOTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxMDgsIDEyNSwgMC41KTtcbn1cbi5yaWdodC1pbmZvID4gaDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLnJpZ2h0LWluZm8gPiBwIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50YWItcmlnaHQtYmNrIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNvbmUtdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvMS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiN0d28tdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvMy5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiN0aHJlZS10IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy80LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLmluZm8tY29udGFpbmVyID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBtYXQtdGFiLWdyb3VwIHtcbiAgICBwYWRkaW5nOiAwIDR2dyAwIDR2dztcbiAgfVxuICAudGFiLXJpZ2h0LWJjayB7XG4gICAgcGFkZGluZzogMCAydnc7XG4gIH1cbiAgLmZlZWRiYWNrIGgxIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuICAudGFiLXJpZ2h0LWJjayB7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIG1hdC10YWItZ3JvdXAgdWwge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxdnc7XG4gIH1cbiAgLnJpZ2h0LWluZm8ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiA0dmggMXZ3O1xuICAgIGhlaWdodDogNDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucmlnaHQtaW5mbyA+IHAge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIG1hdC10YWItZ3JvdXAgcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgbWF0LXRhYi1ncm91cCB1bCA+IGxpIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuaW5mby1jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG4uZmVlZGJhY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMTU1ZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNjRiNDkxIDAlLCAjM2M1MTcyIDQwJSwgIzIzMTU1ZiA5MCUpO1xufVxuLmZlZWRiYWNrID4gZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBtaW4taGVpZ2h0OiA4MCU7XG4gIG1pbi13aWR0aDogNDAlO1xuICBtYXJnaW46IDV2aCAydnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCA4NSwgMTQ1LCAwLjEpO1xuICBwYWRkaW5nLWJvdHRvbTogNHZoO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItaW1hZ2Utc291cmNlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjNjRiNDkxIDAlLCAjM2M1MTcyIDQwJSwgIzIzMTU1ZiA5MCUpO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG4gIGJvcmRlci1pbWFnZS13aWR0aDogMjtcbn1cbi5mZWVkYmFjayBoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHZoIDF2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuZmVlZGJhY2sgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDR2aCAzdnc7XG4gIH1cbn1cbi5mZWVkYmFjayB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZi1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJ2aCAwdnc7XG59XG4uZi1jb250cm9sID4gKiB7XG4gIHdpZHRoOiA4MCU7XG59XG46Om5nLWRlZXAgLmZlZWRiYWNrIC5tYXQtaGludCB7XG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZmVlZGJhY2sgLm1hdC1mb3JtLWZpZWxkIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbjo6bmctZGVlcCAuZmVlZGJhY2sgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5mZWVkYmFjayAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjUlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZvb3RlciA+IGRpdjpudGgtY2hpbGQoMikge1xuICBwYWRkaW5nOiAydmggNXZ3O1xufVxuLmZvb3RlciA+IGRpdiA+IHAge1xuICBtYXJnaW46IDR2aCA0dnc7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9vdGVyID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvZm9vdGVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMyk7XG59XG4uY29va2llLXNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAydmggMnZ3O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uY29va2llIHtcbiAgYm90dG9tOiAtMTAwJSAhaW1wb3J0YW50O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/home/home.component.ts": 
        /*!************************************!*\
          !*** ./src/home/home.component.ts ***!
          \************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(router, formBuilder, datePipe, authenticationService, cookieService, alertService, userService) {
                    var _this = this;
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.datePipe = datePipe;
                    this.authenticationService = authenticationService;
                    this.cookieService = cookieService;
                    this.alertService = alertService;
                    this.userService = userService;
                    this.dateNow = new Date();
                    this.dateNowStr = '';
                    this.loading = false;
                    this.submitted = false;
                    this.color = 'accent';
                    this.dateNowStr = datePipe.transform(this.dateNow, 'yyyy');
                    this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
                    this.isAccept = this.checkCookie();
                    if (this.checkCookie() || !this.isAuth) {
                        this.cookieService.set('isAccept', 'yes');
                        localStorage.setItem('isAccept', 'yes');
                    }
                }
                Object.defineProperty(HomeComponent.prototype, "isAuth", {
                    get: function () { return this.authenticationService.currentUserValue === null; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(HomeComponent.prototype, "f", {
                    get: function () { return this.feedbackForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                HomeComponent.prototype.ngOnInit = function () {
                    initStyles();
                    document.addEventListener('click', onClickTab, false);
                    this.feedbackForm = this.formBuilder.group({
                        fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                            ])],
                        message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    this.feedbackForm2 = this.formBuilder.group({
                        message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                };
                HomeComponent.prototype.getEmailErrorMessage = function () {
                    return this.feedbackForm.controls.email.hasError('required') ? 'You must enter a value' : 'Not a valid email';
                };
                HomeComponent.prototype.project = function () {
                    this.router.navigate(['/project']);
                };
                HomeComponent.prototype.cookieClose = function () {
                    var el = document.getElementsByClassName('cookie-show')[0];
                    el.classList.add('cookie');
                    this.cookieService.set('isAccept', 'yes');
                    localStorage.setItem('isAccept', 'yes');
                };
                HomeComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this.alertService.clear();
                    if (this.feedbackForm.invalid) {
                        return;
                    }
                    var formData = new FormData();
                    formData.append("fullname", this.feedbackForm.controls.fullName.value);
                    formData.append("email", this.feedbackForm.controls.email.value);
                    formData.append("message", this.feedbackForm.controls.message.value);
                    this.userService.getAdminEmails().toPromise()
                        .then(function (_) {
                        _this.userService.getAdminEmails()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                            .subscribe(function (data) {
                            formData.append("amails", data);
                            _this.userService.sendMessage(formData)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                                .subscribe(function (res) {
                                _this.alertService.success('Message send', true);
                                _this.loading = true;
                            }, function (error) {
                                _this.alertService.error(error);
                                _this.loading = false;
                            });
                            _this.feedbackForm2.reset();
                        });
                    });
                };
                HomeComponent.prototype.onSubmit2 = function () {
                    var _this = this;
                    this.submitted = true;
                    this.alertService.clear();
                    if (this.feedbackForm2.invalid) {
                        return;
                    }
                    var formData = new FormData();
                    formData.append("fullname", this.currentUser.fullName);
                    formData.append("email", this.currentUser.email);
                    formData.append("message", this.feedbackForm2.controls.message.value);
                    this.userService.getAdminEmails().toPromise()
                        .then(function (_) {
                        _this.userService.getAdminEmails()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                            .subscribe(function (data) {
                            formData.append("amails", data);
                            _this.userService.sendMessage(formData)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                                .subscribe(function (res) {
                                _this.alertService.success('Message send', true);
                                _this.loading = true;
                            }, function (error) {
                                _this.alertService.error(error);
                                _this.loading = false;
                            });
                            _this.feedbackForm2.reset();
                        });
                    });
                };
                HomeComponent.prototype.checkCookie = function () {
                    if (!this.isAuth) {
                        return false;
                    }
                    var acept = localStorage.getItem('isAccept');
                    if (this.cookieService.check('isAccept') || acept) {
                        return false;
                    }
                    return true;
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/home/home.component.html")).default,
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.less */ "./src/home/home.component.less")).default]
                })
            ], HomeComponent);
            function initStyles() {
                var tab = document.getElementsByClassName('mat-tab-header')[0];
                tab.style.border = '0';
                setTimeout(function () {
                    var tabLinks = document.getElementsByClassName('mat-tab-label-content');
                    for (var index = 0; index < tabLinks.length; index++) {
                        var element = tabLinks[index];
                        element.style.color = "white";
                    }
                }, 500);
            }
            function onClickTab(event) {
                if (event.target.className.includes('mat-tab-label-')) {
                    var name = event.target.innerText;
                    if (name === 'SUBMIT') {
                        document.getElementById('one-t').style.display = 'flex';
                        document.getElementById('two-t').removeAttribute('style');
                        document.getElementById('three-t').removeAttribute('style');
                    }
                    else if (name === 'ADVISOR SUPPORT') {
                        document.getElementById('one-t').removeAttribute('style');
                        document.getElementById('three-t').removeAttribute('style');
                        document.getElementById('two-t').style.display = 'flex';
                    }
                    else {
                        document.getElementById('one-t').removeAttribute('style');
                        document.getElementById('two-t').removeAttribute('style');
                        document.getElementById('three-t').style.display = 'flex';
                    }
                }
            }
            /***/ 
        }),
        /***/ "./src/home/index.ts": 
        /*!***************************!*\
          !*** ./src/home/index.ts ***!
          \***************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/home/home.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });
            /***/ 
        }),
        /***/ "./src/login/index.ts": 
        /*!****************************!*\
          !*** ./src/login/index.ts ***!
          \****************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/login/login.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });
            /***/ 
        }),
        /***/ "./src/login/login.component.less": 
        /*!****************************************!*\
          !*** ./src/login/login.component.less ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-gr {\n  display: flex;\n  justify-content: center;\n  margin: 2vh 1vw;\n}\nh2 {\n  text-align: center;\n}\nbutton {\n  margin: 2vh 1vw 2vh 0;\n}\n.form-gr > mat-form-field {\n  width: 80%;\n}\n.container_m {\n  background-image: url(/assets/5.jpg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-top: 0 !important;\n  width: 100%;\n  height: 100%;\n}\n.blk {\n  margin: 5vh 5vw;\n  border-radius: 4px;\n  border: 1px solid #673ab7;\n  position: relative;\n  padding: 10vh 2vw;\n  background-color: rgba(35, 21, 95, 0.8);\n}\nh2 {\n  color: aliceblue;\n}\n::ng-deep .mat-hint {\n  color: aliceblue !important;\n}\n::ng-deep .mat-form-field {\n  color: aliceblue;\n}\n::ng-deep .mat-form-field-underline {\n  background-color: aliceblue !important;\n}\n::ng-deep .mat-form-field-label {\n  color: aliceblue !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2dpbi9DOi9Vc2Vycy9yb21qYS9Eb2N1bWVudHMvR2l0SHViL0Nyb3dkL0Nyb3dkZnVuZGluZy9Dcm93ZGZ1bmRpbmcuVUkvVUkvc3JjL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIiwic3JjL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtBQ0NKO0FEQ0E7RUFDSSxxQkFBQTtBQ0NKO0FEQ0E7RUFDSSxVQUFBO0FDQ0o7QURFQTtFQUNJLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtBQ0FKO0FERUE7RUFDSSxnQkFBQTtBQ0FKO0FERUE7RUFDSSwyQkFBQTtBQ0FKO0FERUU7RUFDRSxnQkFBQTtBQ0FKO0FERUU7RUFDRSxzQ0FBQTtBQ0FKO0FERUU7RUFDRSwyQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9sb2dpbi9sb2dpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMnZoIDF2dztcbn1cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5idXR0b24ge1xuICAgIG1hcmdpbjogMnZoIDF2dyAydmggMDtcbn1cbi5mb3JtLWdyID4gbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5jb250YWluZXJfbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvNS5qcGcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5ibGsge1xuICAgIG1hcmdpbjogNXZoIDV2dztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY3M2FiNztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTB2aCAydnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMjEsIDk1LCAuOCk7XG59XG5oMiB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbjo6bmctZGVlcCAubWF0LWhpbnQge1xuICAgIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxke1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xuICB9IFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG4gIH0iLCIuZm9ybS1nciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJ2aCAxdnc7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbjogMnZoIDF2dyAydmggMDtcbn1cbi5mb3JtLWdyID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xufVxuLmNvbnRhaW5lcl9tIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvNS5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ibGsge1xuICBtYXJnaW46IDV2aCA1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3M2FiNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHZoIDJ2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMjEsIDk1LCAwLjgpO1xufVxuaDIge1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuOjpuZy1kZWVwIC5tYXQtaGludCB7XG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/login/login.component.ts": 
        /*!**************************************!*\
          !*** ./src/login/login.component.ts ***!
          \**************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
                    this.formBuilder = formBuilder;
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.alertService = alertService;
                    this.loading = false;
                    this.submitted = false;
                    this.hide = true;
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.loginForm = this.formBuilder.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                Object.defineProperty(LoginComponent.prototype, "f", {
                    get: function () { return this.loginForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this.alertService.clear();
                    if (this.loginForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.authenticationService.login(this.f.username.value, this.f.password.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.router.navigate([_this.returnUrl]);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.less */ "./src/login/login.component.less")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments */ "./src/environments/index.ts");
            if (_environments__WEBPACK_IMPORTED_MODULE_5__["prod"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ "./src/project/index.ts": 
        /*!******************************!*\
          !*** ./src/project/index.ts ***!
          \******************************/
        /*! exports provided: ProjectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.component */ "./src/project/project.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () { return _project_component__WEBPACK_IMPORTED_MODULE_1__["ProjectComponent"]; });
            /***/ 
        }),
        /***/ "./src/project/project.component.less": 
        /*!********************************************!*\
          !*** ./src/project/project.component.less ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".pr-form {\n  min-width: 150px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container_m {\n  background-image: url(/assets/main-back.gif);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding-top: 5vh;\n  width: 100%;\n  height: calc(calc(100% - 70px) - 5vh);\n}\n.container > mat-form-field {\n  width: 80%;\n}\n.pr-full-width {\n  width: 100%;\n}\n.cont {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cont > mat-form-field {\n  width: 80%;\n}\n.proj-cont {\n  text-align: center;\n}\n.proj-cont {\n  margin: 5vh 5vw;\n  border-radius: 4px;\n  border: 1px solid #673ab7;\n  position: relative;\n  padding: 10vh 2vw;\n  background-color: rgba(35, 21, 95, 0.8);\n}\n::ng-deep .mat-hint {\n  color: aliceblue !important;\n}\n::ng-deep .mat-form-field {\n  color: aliceblue;\n}\n::ng-deep .mat-form-field-underline {\n  background-color: aliceblue !important;\n}\n::ng-deep .mat-form-field-label {\n  color: aliceblue !important;\n}\nh2 {\n  color: aliceblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9qZWN0L0M6L1VzZXJzL3JvbWphL0RvY3VtZW50cy9HaXRIdWIvQ3Jvd2QvQ3Jvd2RmdW5kaW5nL0Nyb3dkZnVuZGluZy5VSS9VSS9zcmMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5sZXNzIiwic3JjL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENBO0VBQ0UsNENBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQ0NGO0FEQ0E7RUFDRSxVQUFBO0FDQ0Y7QURDQTtFQUNFLFdBQUE7QUNDRjtBRENBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDQTtFQUNFLFVBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUNBRjtBREdBO0VBQ0UsMkJBQUE7QUNERjtBREdBO0VBQ0UsZ0JBQUE7QUNERjtBREdBO0VBQ0Usc0NBQUE7QUNERjtBREdBO0VBQ0UsMkJBQUE7QUNERjtBREdBO0VBQ0UsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnByLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyX20ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9tYWluLWJhY2suZ2lmKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKGNhbGMoMTAwJSAtIDcwcHgpIC0gNXZoKTtcbn1cbi5jb250YWluZXIgPiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG4ucHItZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250ID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xufVxuLnByb2otY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2otY29udCB7XG4gIG1hcmdpbjogNXZoIDV2dztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjczYWI3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwdmggMnZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAyMSwgOTUsIC44KTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaGludCB7XG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGR7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xufSBcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG5oMiB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59IiwiLnByLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyX20ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9tYWluLWJhY2suZ2lmKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKGNhbGMoMTAwJSAtIDcwcHgpIC0gNXZoKTtcbn1cbi5jb250YWluZXIgPiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG4ucHItZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jb250ID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xufVxuLnByb2otY29udCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9qLWNvbnQge1xuICBtYXJnaW46IDV2aCA1dnc7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3M2FiNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHZoIDJ2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMjEsIDk1LCAwLjgpO1xufVxuOjpuZy1kZWVwIC5tYXQtaGludCB7XG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG5oMiB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/project/project.component.ts": 
        /*!******************************************!*\
          !*** ./src/project/project.component.ts ***!
          \******************************************/
        /*! exports provided: ProjectComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () { return ProjectComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models */ "./src/_models/index.ts");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var ProjectComponent = /** @class */ (function () {
                function ProjectComponent(authenticationService, userService, formBuilder, router, alertService) {
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.alertService = alertService;
                    this.loading = false;
                    this.submitted = false;
                    this.currentUser = this.authenticationService.currentUserValue;
                }
                ProjectComponent.prototype.ngOnInit = function () {
                    this.projectForm = this.formBuilder.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        filePath: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                    });
                };
                Object.defineProperty(ProjectComponent.prototype, "f", {
                    get: function () { return this.projectForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ProjectComponent.prototype, "isSelected", {
                    get: function () {
                        var input = document.getElementById('input-file-id');
                        if (input.value === '') {
                            return 'primary';
                        }
                        return 'accent';
                    },
                    enumerable: true,
                    configurable: true
                });
                ProjectComponent.prototype.fileChange = function (element) {
                    this.uploadedFiles = element.target.files;
                };
                ProjectComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (this.projectForm.invalid) {
                        return;
                    }
                    this.submitted = true;
                    this.alertService.clear();
                    this.loading = true;
                    var project = new _models__WEBPACK_IMPORTED_MODULE_5__["Project"];
                    project.name = this.projectForm.controls.name.value;
                    project.description = this.projectForm.controls.description.value;
                    project.userId = this.currentUser.id;
                    if (this.uploadedFiles[0].size > 20971520) {
                        this.alertService.error('file must be less than 20 mb!', true);
                        this.loading = false;
                        return;
                    }
                    var formData = new FormData();
                    for (var i = 0; i < this.uploadedFiles.length; i++) {
                        formData.append("uploads", this.uploadedFiles[i], this.uploadedFiles[i].name);
                    }
                    formData.append("fullname", this.currentUser.fullName);
                    formData.append("email", this.currentUser.email);
                    formData.append("description", this.projectForm.controls.description.value);
                    formData.append("filename", this.uploadedFiles[0].name);
                    this.userService.getAdminEmails().toPromise()
                        .then(function (data) {
                        formData.append("amails", data);
                    })
                        .then(function (_) {
                        _this.userService.uploadFile(formData)
                            .toPromise()
                            .then(function (data) {
                            _this.alertService.success('File loaded', true);
                            project.filePath = data['path'];
                            _this.userService.createProject(project)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                                .subscribe(function (data) {
                                _this.alertService.success('Project loaded', true);
                                _this.router.navigate(['/']);
                            }, function (error) {
                                _this.alertService.error(error);
                                _this.loading = false;
                            });
                        });
                    });
                };
                return ProjectComponent;
            }());
            ProjectComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
            ]; };
            ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/project/project.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.less */ "./src/project/project.component.less")).default]
                })
            ], ProjectComponent);
            /***/ 
        }),
        /***/ "./src/projectlist/index.ts": 
        /*!**********************************!*\
          !*** ./src/projectlist/index.ts ***!
          \**********************************/
        /*! exports provided: ProjectListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _projectlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectlist.component */ "./src/projectlist/projectlist.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function () { return _projectlist_component__WEBPACK_IMPORTED_MODULE_1__["ProjectListComponent"]; });
            /***/ 
        }),
        /***/ "./src/projectlist/projectlist.component.less": 
        /*!****************************************************!*\
          !*** ./src/projectlist/projectlist.component.less ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("jw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9qZWN0bGlzdC9DOi9Vc2Vycy9yb21qYS9Eb2N1bWVudHMvR2l0SHViL0Nyb3dkL0Nyb3dkZnVuZGluZy9Dcm93ZGZ1bmRpbmcuVUkvVUkvc3JjL3Byb2plY3RsaXN0L3Byb2plY3RsaXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL3Byb2plY3RsaXN0L3Byb2plY3RsaXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0UsaUNBQWlDO0VEQy9CLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvcHJvamVjdGxpc3QvcHJvamVjdGxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJqdy1tb2RhbCB7XG4gICAgLyogbW9kYWxzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwianctbW9kYWwge1xuICAvKiBtb2RhbHMgYXJlIGhpZGRlbiBieSBkZWZhdWx0ICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/projectlist/projectlist.component.ts": 
        /*!**************************************************!*\
          !*** ./src/projectlist/projectlist.component.ts ***!
          \**************************************************/
        /*! exports provided: ProjectListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function () { return ProjectListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var ProjectListComponent = /** @class */ (function () {
                function ProjectListComponent(authenticationService, userService, router, modalService) {
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.router = router;
                    this.modalService = modalService;
                    this.displayedColumns = ['index', 'owner', 'name', 'desc', 'action'];
                    this.currentUser = this.authenticationService.currentUserValue;
                    this.owner = this.router.url.replace('/listprojects/', '');
                    this.loadProject();
                }
                ProjectListComponent.prototype.ngOnInit = function () { };
                ProjectListComponent.prototype.sliceDescription = function (str) {
                    return str.slice(-str.length, -(str.length - 20));
                };
                ProjectListComponent.prototype.openModal = function (id, name, path) {
                    this.deletedId = id;
                    this.deletedInput = name;
                    this.deletedFilePath = path;
                    this.modalService.open('custom-modal-3');
                };
                ProjectListComponent.prototype.closeModal = function () {
                    this.modalService.close('custom-modal-3');
                };
                ProjectListComponent.prototype.loadProject = function () {
                    var _this = this;
                    this.userService.getProjects(this.owner)
                        .toPromise().then(function (pr) {
                        _this.dataSource = pr;
                        console.log('project loaded');
                    });
                };
                ProjectListComponent.prototype.refresh = function (event) {
                    this.dataSource = [];
                    this.loadProject();
                };
                return ProjectListComponent;
            }());
            ProjectListComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }
            ]; };
            ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/projectlist/projectlist.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectlist.component.less */ "./src/projectlist/projectlist.component.less")).default]
                })
            ], ProjectListComponent);
            /***/ 
        }),
        /***/ "./src/register/index.ts": 
        /*!*******************************!*\
          !*** ./src/register/index.ts ***!
          \*******************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ "./src/register/register.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return _register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]; });
            /***/ 
        }),
        /***/ "./src/register/register.component.less": 
        /*!**********************************************!*\
          !*** ./src/register/register.component.less ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  display: flex;\n  justify-content: center;\n  margin: 2vh 1vw;\n}\nh2 {\n  text-align: center;\n}\nbutton {\n  margin: 2vh 1vw 2vh 0;\n}\n.form-group > mat-form-field {\n  width: 80%;\n}\n.container_m {\n  background-image: url(/assets/4.jpg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-top: 0 !important;\n  width: 100%;\n  height: 100%;\n}\n.blk {\n  margin: 5vh 5vw;\n  border-radius: 4px;\n  border: 1px solid #673ab7;\n  position: relative;\n  background-color: rgba(35, 21, 95, 0.8);\n}\nh2 {\n  color: aliceblue;\n}\n::ng-deep .mat-hint {\n  color: aliceblue !important;\n}\n::ng-deep .mat-form-field {\n  color: aliceblue;\n}\n::ng-deep .mat-form-field-underline {\n  background-color: aliceblue !important;\n}\n::ng-deep .mat-form-field-label {\n  color: aliceblue !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZWdpc3Rlci9DOi9Vc2Vycy9yb21qYS9Eb2N1bWVudHMvR2l0SHViL0Nyb3dkL0Nyb3dkZnVuZGluZy9Dcm93ZGZ1bmRpbmcuVUkvVUkvc3JjL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0E7RUFDSSxrQkFBQTtBQ0NKO0FEQ0E7RUFDSSxxQkFBQTtBQ0NKO0FEQ0E7RUFDSSxVQUFBO0FDQ0o7QURFQTtFQUNJLG9DQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUNBSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSjtBREVBO0VBQ0ksMkJBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBQ0Usc0NBQUE7QUNBSjtBREVFO0VBQ0UsMkJBQUE7QUNBSiIsImZpbGUiOiJzcmMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJ2aCAxdnc7XG59XG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9uIHtcbiAgICBtYXJnaW46IDJ2aCAxdncgMnZoIDA7XG59XG4uZm9ybS1ncm91cCA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uY29udGFpbmVyX20ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzLzQuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uYmxrIHtcbiAgICBtYXJnaW46IDV2aCA1dnc7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NzNhYjc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDIxLCA5NSwgLjgpO1xufVxuaDIge1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG46Om5nLWRlZXAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZHtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbiAgfSBcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xuICB9IiwiLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAydmggMXZ3O1xufVxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5idXR0b24ge1xuICBtYXJnaW46IDJ2aCAxdncgMnZoIDA7XG59XG4uZm9ybS1ncm91cCA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5jb250YWluZXJfbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzLzQuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmxrIHtcbiAgbWFyZ2luOiA1dmggNXZ3O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NzNhYjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMjEsIDk1LCAwLjgpO1xufVxuaDIge1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuOjpuZy1kZWVwIC5tYXQtaGludCB7XG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/register/register.component.ts": 
        /*!********************************************!*\
          !*** ./src/register/register.component.ts ***!
          \********************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(formBuilder, router, authenticationService, userService, alertService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.alertService = alertService;
                    this.loading = false;
                    this.submitted = false;
                    this.hide = true;
                    if (this.authenticationService.currentUserValue) {
                        this.router.navigate(['/']);
                    }
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                            ])],
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
                    });
                };
                Object.defineProperty(RegisterComponent.prototype, "f", {
                    get: function () { return this.registerForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                RegisterComponent.prototype.getPasswordErrorMessage = function () {
                    return this.registerForm.controls.password.hasError('required') ? 'You must enter a value' : 'password must be at least 6 characters';
                };
                RegisterComponent.prototype.getEmailErrorMessage = function () {
                    return this.registerForm.controls.email.hasError('required') ? 'You must enter a value' : 'Not a valid email';
                };
                RegisterComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this.alertService.clear();
                    if (this.registerForm.invalid) {
                        return;
                    }
                    this.loading = true;
                    this.userService.register(this.registerForm.value)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('Registration successful', true);
                        _this.router.navigate(['/login']);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.less */ "./src/register/register.component.less")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/user/index.ts": 
        /*!***************************!*\
          !*** ./src/user/index.ts ***!
          \***************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component */ "./src/user/user.component.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return _user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"]; });
            /***/ 
        }),
        /***/ "./src/user/user.component.less": 
        /*!**************************************!*\
          !*** ./src/user/user.component.less ***!
          \**************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  display: flex;\n  justify-content: center;\n}\n.form-group > mat-form-field {\n  width: 80%;\n}\nh2,\nh4 {\n  text-align: center;\n}\nform {\n  margin: 2vh 2vw;\n}\njw-modal {\n  /* modals are hidden by default */\n  display: none;\n}\n.container_m {\n  background-image: url(/assets/main-back.gif);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding-top: 5vh;\n  width: 100%;\n  height: calc(calc(100% - 70px) - 5vh);\n}\n.blk {\n  margin: 5vh 5vw;\n  border-radius: 4px;\n  border: 1px solid #673ab7;\n  position: relative;\n  padding: 5vh 2vw;\n  background-color: rgba(35, 21, 95, 0.8);\n  width: 90%;\n}\n.mat-form-field {\n  margin-bottom: 2vh;\n}\n::ng-deep .mat-hint {\n  color: aliceblue !important;\n}\n::ng-deep .mat-form-field {\n  color: aliceblue;\n}\n::ng-deep .mat-form-field-underline {\n  background-color: aliceblue !important;\n}\n::ng-deep .mat-form-field-label {\n  color: aliceblue !important;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  color: aliceblue !important;\n}\n::ng-deep .mat-tab-header > .mat-tab-header-pagination > .mat-tab-header-pagination-chevron {\n  border-color: white !important;\n}\nh2 {\n  color: aliceblue;\n}\n@media screen and (max-width: 580px) {\n  .table {\n    overflow: scroll;\n  }\n  .table > tbody > tr > td {\n    margin: 0 2vw;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91c2VyL0M6L1VzZXJzL3JvbWphL0RvY3VtZW50cy9HaXRIdWIvQ3Jvd2QvQ3Jvd2RmdW5kaW5nL0Nyb3dkZnVuZGluZy5VSS9VSS9zcmMvdXNlci91c2VyLmNvbXBvbmVudC5sZXNzIiwic3JjL3VzZXIvdXNlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0E7RUFDSSxVQUFBO0FDQ0o7QURDQTs7RUFDSSxrQkFBQTtBQ0VKO0FEQUE7RUFDSSxlQUFBO0FDRUo7QURBQTtFQ0VFLGlDQUFpQztFREEvQixhQUFBO0FDRUo7QURBQTtFQUNJLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7QUNFSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxVQUFBO0FDRUo7QURBQTtFQUNFLGtCQUFBO0FDRUY7QURBQTtFQUNJLDJCQUFBO0FDRUo7QURBRTtFQUNFLGdCQUFBO0FDRUo7QURBRTtFQUNFLHNDQUFBO0FDRUo7QURBRTtFQUNFLDJCQUFBO0FDRUo7QURBRTtFQUNFLDJCQUFBO0FDRUo7QURBRTtFQUNFLDhCQUFBO0FDRUo7QURBRTtFQUNFLGdCQUFBO0FDRUo7QURDRTtFQUNBO0lBQ0ksZ0JBQUE7RUNDSjtFRENBO0lBQ0ksYUFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL3VzZXIvdXNlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvcm0tZ3JvdXAgPiBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDgwJTtcbn1cbmgyLCBoNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9ybSB7XG4gICAgbWFyZ2luOiAydmggMnZ3O1xufVxuanctbW9kYWwge1xuICAgIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lcl9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9tYWluLWJhY2suZ2lmKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmctdG9wOiA1dmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKGNhbGMoMTAwJSAtIDcwcHgpIC0gNXZoKTtcbn1cbi5ibGsge1xuICAgIG1hcmdpbjogNXZoIDV2dztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY3M2FiNztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNXZoIDJ2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAyMSwgOTUsIC44KTtcbiAgICB3aWR0aDogOTAlO1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xufVxuOjpuZy1kZWVwIC5tYXQtaGludCB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGR7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG4gIH0gXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwgLm1hdC10YWItbGFiZWwtY29udGVudCB7XG4gICAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiAgaDIge1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC50YWJsZSB7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG4gIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gICAgICBtYXJnaW46IDAgMnZ3O1xuICB9XG59IiwiLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtLWdyb3VwID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xufVxuaDIsXG5oNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvcm0ge1xuICBtYXJnaW46IDJ2aCAydnc7XG59XG5qdy1tb2RhbCB7XG4gIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250YWluZXJfbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL21haW4tYmFjay5naWYpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoY2FsYygxMDAlIC0gNzBweCkgLSA1dmgpO1xufVxuLmJsayB7XG4gIG1hcmdpbjogNXZoIDV2dztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjczYWI3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDV2aCAydnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDIxLCA5NSwgMC44KTtcbiAgd2lkdGg6IDkwJTtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cbjo6bmctZGVlcCAubWF0LWhpbnQge1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuaDIge1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLnRhYmxlIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG4gIC50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gICAgbWFyZ2luOiAwIDJ2dztcbiAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/user/user.component.ts": 
        /*!************************************!*\
          !*** ./src/user/user.component.ts ***!
          \************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/_services/index.ts");
            var UserComponent = /** @class */ (function () {
                function UserComponent(formBuilder, authenticationService, userService, router, alertService, modalService) {
                    this.formBuilder = formBuilder;
                    this.authenticationService = authenticationService;
                    this.userService = userService;
                    this.router = router;
                    this.alertService = alertService;
                    this.modalService = modalService;
                    this.hide = true;
                    this.loading = false;
                    this.submitted = false;
                    this.displayedColumns = ['index', 'name', 'desc', 'act'];
                    this.currentUser = this.authenticationService.currentUserValue;
                    this.loadProject();
                }
                UserComponent.prototype.ngOnInit = function () {
                    this.changeForm = this.formBuilder.group({
                        fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                            ])],
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
                    });
                };
                Object.defineProperty(UserComponent.prototype, "f", {
                    get: function () { return this.changeForm.controls; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(UserComponent.prototype, "isAdnin", {
                    get: function () { return this.currentUser.role === 1; },
                    enumerable: true,
                    configurable: true
                });
                UserComponent.prototype.sliceDescription = function (str) {
                    return str.slice(-str.length, -(str.length - 20));
                };
                UserComponent.prototype.onChangeFName = function () {
                    var _this = this;
                    if (this.changeForm.controls.fullName.invalid) {
                        return;
                    }
                    var updatedUser = JSON.parse(JSON.stringify(this.currentUser));
                    updatedUser.password = '';
                    updatedUser.fullName = this.changeForm.controls.fullName.value;
                    this.userService.update(updatedUser, this.currentUser.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('Update successful', true);
                        _this.currentUser.fullName = _this.changeForm.controls.fullName.value;
                        _this.router.navigate(['/user']);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                UserComponent.prototype.onChangeEmail = function () {
                    var _this = this;
                    if (this.changeForm.controls.email.invalid) {
                        return;
                    }
                    var updatedUser = JSON.parse(JSON.stringify(this.currentUser));
                    updatedUser.password = '';
                    updatedUser.email = this.changeForm.controls.email.value;
                    this.userService.update(updatedUser, this.currentUser.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('Update successful', true);
                        _this.currentUser.email = _this.changeForm.controls.email.value;
                        _this.router.navigate(['/user']);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                UserComponent.prototype.onChangeUserName = function () {
                    var _this = this;
                    if (this.changeForm.controls.username.invalid) {
                        return;
                    }
                    var updatedUser = JSON.parse(JSON.stringify(this.currentUser));
                    updatedUser.password = '';
                    updatedUser.username = this.changeForm.controls.username.value;
                    this.userService.update(updatedUser, this.currentUser.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('Update successful', true);
                        _this.currentUser.username = _this.changeForm.controls.username.value;
                        localStorage.clear();
                        _this.authenticationService.logout();
                        _this.router.navigate(['/login']);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                UserComponent.prototype.onChangePassword = function () {
                    var _this = this;
                    if (this.changeForm.controls.newPassword.invalid) {
                        return;
                    }
                    var updatedUser = JSON.parse(JSON.stringify(this.currentUser));
                    updatedUser.password = this.changeForm.controls.newPassword.value;
                    this.userService.update(updatedUser, this.currentUser.id)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                        .subscribe(function (data) {
                        _this.alertService.success('Update successful', true);
                        _this.router.navigate(['/user']);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                UserComponent.prototype.getPasswordErrorMessage = function () {
                    return this.changeForm.controls.newPassword.hasError('required') ? 'You must enter a value' : 'Not a valid email';
                };
                UserComponent.prototype.getEmailErrorMessage = function () {
                    return this.changeForm.controls.email.hasError('required') ? 'You must enter a value' : 'Not a valid email';
                };
                UserComponent.prototype.openModal = function (id, name, path) {
                    this.deletedId = id;
                    this.deletedInput = name;
                    this.deletedFilePath = path;
                    this.modalService.open('custom-modal-1');
                };
                UserComponent.prototype.closeModal = function () {
                    this.modalService.close('custom-modal-1');
                };
                UserComponent.prototype.loadProject = function () {
                    var _this = this;
                    this.userService.getProjects(this.currentUser.username)
                        .toPromise().then(function (pr) {
                        _this.dataSource = pr;
                        console.log('project loaded');
                    });
                };
                UserComponent.prototype.refresh = function (event) {
                    this.dataSource = [];
                    this.loadProject();
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
                { type: _services__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }
            ]; };
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.less */ "./src/user/user.component.less")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\romja\Documents\GitHub\Crowd\Crowdfunding\Crowdfunding.UI\UI\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map