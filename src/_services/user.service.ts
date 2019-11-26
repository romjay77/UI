import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, Project } from '../_models';

const url = 'https://crowdfundingidentity20191126012815.azurewebsites.net/api/values/';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(url);
    }

    register(user: User) {
        return this.http.post(url + 'register', user);
    }

    delete(id: number) {
        return this.http.delete(url + id);
    }

    getUser(id: number) {
        return this.http.get<User>(url + id);
    }

    update(user: User, id: number) {
        return this.http.put(url + id, user);
    }
    changeRole(userName: string, isAdmin: boolean) {
        return this.http.put(url + 'chrole', { userName, isAdmin });
    }

    createProject(project: Project) {
        return this.http.post(url + 'project', project);
    }

    deleteProject(id: number, path: string) {
        return this.http.delete(url + `project/${id}`);
    }

    getProjects(userName: string) {
        return this.http.get<Project[]>(url + `projects/${userName}`);
    }
    getAdminEmails() {
        return this.http.post(url + `getemails`, {});
    }

    // For NodeJs
    uploadFile(file: FormData) {
        return this.http.post('uploadFile', file)
    }
    deleteFile(fileName: FormData) {
        return this.http.post('deleteFile', fileName)
    }
    sendMessage(formData: FormData) {
        return this.http.post('sendMessage', formData)
    }
}