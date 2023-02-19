import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  // searchTerm = new BehaviorSubject("")

  constructor(private http: HttpClient) {
    // this.getDetails()
  }


  getAllJob() {
    return this.http.get('http://localhost:5000/job/get').pipe(catchError(this.handleError));
  }
  createJob(data: any) {
    return this.http.post('http://localhost:5000/job/add', data).toPromise()
  }
  deleteJob(id: Number) {
    return this.http.delete(`http://localhost:5000/job/${id}`).toPromise()
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error;
    }
    return throwError(errorMessage);
  }
}
