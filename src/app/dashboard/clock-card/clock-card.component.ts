import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ShiftState, SendClockInAction, SendClockOutAction } from 'src/app/store/shift.state';
import * as moment from 'moment';

@Component({
  selector: 'app-clock-card',
  templateUrl: './clock-card.component.html',
  styleUrls: ['./clock-card.component.scss']
})
export class ClockCardComponent implements OnInit {

  @Select(ShiftState.GetClockedUserState)
  clockedInuser: Observable<boolean>

  public isActive = false;
  public subs = new Subscription()
  now = moment().format();
  userLogedTime: any;
  countTime: any;
  timer = 0;
  clockedTime: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.subs.add(this.clockedInuser.subscribe(res => {
      this.isActive = res;
    }))
  }


  clockedClicked() {
    this.isActive = !this.isActive;
    if(this.isActive){
      this.store.dispatch(new SendClockInAction(this.now));
    } else {
      this.store.dispatch(new SendClockOutAction(this.now));
    }
    this.timeCounterStart(this.isActive);
  }

  // Handle loging in front end
  timeCounterStart(stop?: boolean) {
    if (stop) {
      this.countTime = setInterval(() => {
        this.timer += 1;
        this.userLogedTime = moment.utc(this.timer * 1000).format('HH:mm:ss');
      }, 1000)
    } else {
      clearInterval(this.countTime)
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
