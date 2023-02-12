import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalDataService } from './local-data.service';
import ResumeUpload from '../models/resumeUpload';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public API = 'https://localhost:44328';
  public JobApplication_API = `${this.API}/api/JobApplication`;

  constructor(private http: HttpClient, public localDataService: LocalDataService) { }

  //// follow-up
  // get all jobApplications
  getAllJobApps(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.JobApplication_API + '/getAllJobApps');
  }
  // get app-status-type
  getAppStatusTypes(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.JobApplication_API + '/getAppStatusTypes');
  }
  // view jobApplication
  viewJobApp(jobAppId): Observable<any> {
    return this.http.get<any>(this.JobApplication_API + '/viewJobApp/'+jobAppId);
  }
  // edit jobApplication
  editJobApp(jobAppData): Observable<any> {
    return this.http.post(this.JobApplication_API + '/editJobApp', jobAppData)
  }
  // delete jobApplication
  deleteJobApp(jobAppData): Observable<any> {
    return this.http.post(this.JobApplication_API + '/deleteJobApp', jobAppData)
  }
}
