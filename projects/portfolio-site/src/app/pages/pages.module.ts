import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactPage } from "./contact/contact.page";
import { HomePage } from "./home/home.page";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomePage,
        ContactPage
    ]
})
export class PagesModule { }