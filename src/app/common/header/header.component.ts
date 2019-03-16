import { Component } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
    selector : "bwm-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.Component.scss"]
})

export class headerComponent{
        constructor(public auth: AuthService,
                    private router: Router){ }  
        
        logout(){
            this.auth.logout();
            this.router.navigate(['/login']);
        }
}