import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BASE_URL} from "./app.tokens";
import {SharedModule} from "./shared/shared.module";
import {AppRouterModule} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {FlightHistoryComponent} from "./flight-history/flight-history.component";
import {BookingsComponent} from "./bookings/bookings.component";
import {FlightBookingModule} from "./flight-booking/flight-booking.module";
import {AuthLoadGuard} from "./shared/auth/auth.load.guard";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        AppRouterModule,
        //FlightBookingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        BookingsComponent,
        FlightHistoryComponent
    ],
    providers: [
        { provide: BASE_URL, useValue: "http://www.angular.at"},
        AuthLoadGuard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}