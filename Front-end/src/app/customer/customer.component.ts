import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


class Customer {

    id: number;
    name: string;
    email: string;
    doc: number;
    clientType: string;
    addressList: Array<{
        id: number,
        address: string,
        number: string,
        additionalAddressInfo: string,
        area: string,
        zipCode: string,
        city: Array<{
            id: number,
            name: string,
            state: Array<{
                id: number,
                name: string
            }>
        }>
    }>;
    phones: number[];
}

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    customersObservable: Observable<Customer[]>;
    constructor(private httpClient: HttpClient) { }

    regForm = new FormGroup({
        id: new FormControl()
    });
    submit() {
        if (this.regForm.value.id != null) {
            this.customersObservable = this.httpClient
                .get<Customer[]>('https://hrovina-online-store.herokuapp.com/clients/1');
        } else {
            this.customersObservable = this.httpClient
                .get<Customer[]>('https://hrovina-online-store.herokuapp.com/clients');
        }
    }
    ngOnInit() {
    }
}
