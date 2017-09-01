import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router, RouterLinkActive } from '@angular/router';

import { Routing } from './app.routing';

/* plugins */

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { MyDatePickerModule } from 'mydatepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';

/* Firebase Dependencey */

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

/* components */

import { AppComponent } from './shared/app/app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RvsListingComponent } from './routes/rvs-listing/rvs-listing.component';
import { FilterComponent } from './shared/filter/filter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrandslideComponent } from './shared/brandslide/brandslide.component';
import { HomeComponent } from './routes/home/home.component';
import { RvlistListviewComponent } from './shared/rvlist-listview/rvlist-listview.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { RvListsComponent } from './shared/rv-lists/rv-lists.component';
import { RvDetailComponent } from './routes/rv-detail/rv-detail.component';
import { HeaderFilterComponent } from './shared/header-filter/header-filter.component';
import { GridviewComponent } from './shared/gridview/gridview.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { SignupRenterComponent } from './shared/signup-renter/signup-renter.component';
import { SignupOwnerComponent } from './shared/signup-owner/signup-owner.component';
import { ListTrailerComponent } from './routes/list-trailer/list-trailer.component';
import { TrailerSpecificationComponent } from './shared/trailer-specification/trailer-specification.component';
import { TrailerLocationComponent } from './shared/trailer-location/trailer-location.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const firebaseConfig = {
  apiKey: "AIzaSyD7fA0nS4hMW1cTLyKIfvx1lfj8V4BTz0U",
  authDomain: "authentication-5d867.firebaseapp.com",
  databaseURL: "https://authentication-5d867.firebaseio.com",
  projectId: "authentication-5d867",
  storageBucket: "authentication-5d867.appspot.com",
  messagingSenderId: "494284030141"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RvsListingComponent,
    FilterComponent,
    FooterComponent,
    BrandslideComponent,
    HomeComponent,
    RvlistListviewComponent,
    NotFoundComponent,
    RvListsComponent,
     RvListsComponent,
     RvDetailComponent,
     HeaderFilterComponent,
     GridviewComponent,
     LoginComponent,
     SignupComponent,
     SignupRenterComponent,
     SignupOwnerComponent,
     ListTrailerComponent,
     TrailerSpecificationComponent,
     TrailerLocationComponent,
     ContactUsComponent,
     AdminLoginComponent,
     AdminHeaderComponent,
     DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    MyDatePickerModule,
    RatingModule,
    IonRangeSliderModule,
    HttpModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, 'my-app'),
    AngularFireAuthModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
