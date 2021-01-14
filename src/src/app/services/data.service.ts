import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Products } from '../models/product.model';
import { Security } from '../utils/security.utils';


@Injectable({
    providedIn: 'root' //Esse data servide está disponível em todos os módulos
})

//Mas caso não seja utilizado em todos os módulos chamar o provider dentro de cada component ts

export class DataService {
   
    public url = 'http://localhost:3200/v1';

    constructor(private http: HttpClient) {}

    public composeHeaders()
    {
        const token = Security.getToken();
        const headers = new HttpHeaders();
        if(token != null)
        {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;

    }

    getProducts(){
        return this.http.get<Products[]>(`${this.url}/products`);
    }

    authenticate(data: any){
        return this.http.post<Products[]>(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken(){
        return this.http.post<Products[]>(`${this.url}/accounts/refresh-token`, null, 
        {headers: this.composeHeaders() });
    }

    create(data: any){
        return this.http.post(`${this.url}/accounts`, data);
    }

    resetPassword(data: any){
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }

    getProfile() {
        return this.http.get(`${this.url}/accounts`, { headers: this.composeHeaders() });
    }

    updateProfile(data: any) {
        return this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
    }



}

