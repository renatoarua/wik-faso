import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    notFound: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            cpf: ['', [
                Validators.required,
                Validators.minLength(11),
                Validators.maxLength(11)
                ]
            ],
            senha: ['', Validators.required]
        });
    }

    isFormsValided() {
        if (this.loginForm.valid)
            return true;

        this.markFormGroupTouched(this.loginForm)
        return false;
    }

    private markFormGroupTouched(form: FormGroup) {
        Object.values(form.controls).forEach(control => control.markAsTouched());
    }

    login() {
        if (!this.isFormsValided())
            return;

        const auth = {
            'cpf': this.loginForm.get('cpf').value,
            'senha': this.loginForm.get('senha').value
        }

        this.authService.authenticate(auth)
            .subscribe(ret => {
                console.log(ret);
                this.router.navigate(['inicio'])
            },
            err => this.showNotFoundMessage());
    }

    showNotFoundMessage() {
        this.notFound = true;
        setTimeout(() => {
            this.notFound = false;
        }, 4000);
    }
}