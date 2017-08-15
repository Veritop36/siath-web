import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {MdButtonModule, MdCardModule, MdInputModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        MdInputModule,
        MdCardModule,
        MdButtonModule,
        FlexLayoutModule,
        BrowserAnimationsModule
    ],
    declarations: [LoginComponent, MainComponent],
    exports: [LoginComponent, MainComponent]
})
export class MainModule {
}
