import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clockedUser } from '../models/clockIn.model';
import { OpenShiftModel } from '../models/shift.model';


@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  constructor(private http: HttpClient) { }


  postClockIn(time: string): Observable<clockedUser> {
    return this.http.post<clockedUser>('http://localhost:5000/clock', { now: time });
  }

  postClockOut(time: string): Observable<clockedUser> {
    return this.http.post<clockedUser>('http://localhost:5000/clock_out', { now: time });
  }

}
