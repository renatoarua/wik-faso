import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {
    
    loginForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            cpf: ['', Validators.required],
            senha: ['', Validators.required]
        });
    }

    isFormsValided() {
        if (this.loginForm.valid)
            return true;
        return false;
    }

    login() {
        if (!this.isFormsValided())
            return;

        const auth = { 
            'cpf': this.loginForm.get('cpf').value, 
            'senha': this.loginForm.get('senha').value 
        }

        // this.authService.authenticate(auth)
        //     .subscribe(ret => {
        //         console.log(ret);
        //         this.router.navigate(['user', this.loginForm.get('userName').value])
        //     });
    }
}