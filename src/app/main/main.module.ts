import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdInputModule,
        MdCardModule,
        MdButtonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MdMenuModule,
        MdIconModule,
        MdGridListModule,
        HttpClientModule
    ],
    declarations: [LoginComponent, MainComponent],
    exports: [LoginComponent, MainComponent]
})
export class MainModule {
}
