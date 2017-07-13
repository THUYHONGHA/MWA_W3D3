import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router, } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { Injectable, OnDestroy } from '@angular/core';
import { DbService } from '../db.service';

@Injectable()
export class ProfileGuard implements CanActivate {
    private subscription: Subscription;
    constructor(private db: DbService, private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (!this.db.getData().find(x => x.id === route.params['id'])) {
            this.route.navigate(['error']);
            return false;
        }

        return true;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}