import {Component, OnDestroy} from '@angular/core';
import {DbService} from '../db.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {
  private subscription: Subscription;
  id: string;
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private db: DbService) {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    this.user = db.getData().filter(user => user.id === this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
