import { Component } from "@angular/core";


@Component({
    templateUrl: 'home.component.html',
    styles: [`
    .wf-home {
        background-image: url('../assets/img/home/home-bkg.jpg');
        background-attachment: fixed;
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 100vw;
        height: 100vh;
    }

    .wf-logo-home {
        max-width: 320px ;
    }

    .wf-bg-routes-login {
        background: #fff; 
        box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.6), 0 2px 10px 0 rgba(0, 0, 0, 0.26);
    }
    `]
})
export class HomeComponent {}