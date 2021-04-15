import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataApiService {

    constructor(public http: HttpClient) {}

    //public headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

    private options:any={
            responseType:"json",
            headers:{ 'Content-Type': 'application/json', 'authorization':' '},
            body:{}
    }

    public get(endPoint: string, params:any): Observable<object>{
        this.options.params=params
        let link: string = endPoint;
        return this.http.request('GET', link, this.options);
    }

}