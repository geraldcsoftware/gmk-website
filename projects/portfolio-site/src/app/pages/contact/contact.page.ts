import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './contact.page.html',
    host: { class: 'flex-grow' }
})
export class ContactPage {
    contactForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required]),
    });

    submit(): void { }
}