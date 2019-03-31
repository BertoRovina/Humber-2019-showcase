import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-get-by-id-form',
    templateUrl: './get-by-id-form.component.html',
    styleUrls: ['./get-by-id-form.component.css']
})
export class GetByIdFormComponent {

    objects = ['Category', 'Customer',
        'Order', 'Product'];
    selectedOption = '';
    submitted = false;
    onChange(newValue) {
        this.selectedOption = newValue;
        console.log(this.selectedOption);
    }
    onSubmit() { this.submitted = true; }

}
