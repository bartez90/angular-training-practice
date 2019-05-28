import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
    private timer;
    @ViewChild('form') updateForm: NgForm;
    packages = ['basic', 'premium'];
    nicknameProposals = ['łysy z brazzers', 'lama_owca', 'ojciec rydzyk', 'niunia15'];
    codes = ['cycki', 'dupa'];
    user: User;
    showUpdateText = false;
    codeAdded = false;
    validCode = false;
    sub: Subscription;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user = this.userService.user;
        this.codeAdded = this.user.codeAdded;

        this.sub = this.updateForm.valueChanges.subscribe(
            (form) => this.validCode = this.codes.includes(form.code) ? true : false
        );
    }

    showProposal() {
        const nickname = this.nicknameProposals[Math.floor(Math.random() * this.nicknameProposals.length)];
        this.updateForm.form.patchValue({nickname});
    }

    addCode() {
        this.codeAdded = true;
    }

    onSave() {
        this.showUpdateText = true;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.showUpdateText = false, 2000);

        this.user.mail = this.updateForm.value.mail;
        this.user.nickname = this.updateForm.value.nickname;
        this.user.packageName = this.updateForm.value.package;
        this.user.codeAdded = this.codeAdded;
        this.userService.updateUser(this.user);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
