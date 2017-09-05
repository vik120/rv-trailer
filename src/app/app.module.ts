import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router, RouterLinkActive } from '@angular/router';
import { Routing } from './app.routing';

/* Guard Services */
import { ClientNotAuthGuard } from './guards/clientNotAuth.guard';
import { ClientAuthGuard } from './guards/clientAuth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AuthGuard } from './guards/auth.guard';

/* plugins */

import { TypeaheadModule, DatepickerModule  } from 'ngx-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';

import { FlashMessagesModule } from 'angular2-flash-messages';

/* Firebase Dependencey */

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { OwlModule } from 'ngx-owl-carousel';


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
import { TrailerDetailComponent } from './shared/trailer-detail/trailer-detail.component';
import { TrailerPricingComponent } from './shared/trailer-pricing/trailer-pricing.component';
import { TrailerPhotoComponent } from './shared/trailer-photo/trailer-photo.component';
import { TestimonialBoxComponent } from './shared/testimonial-box/testimonial-box.component';
import { BlogComponent } from './routes/blog/blog.component';
import { BlogDetailComponent } from './routes/blog-detail/blog-detail.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminChangePassComponent } from './admin/admin-change-pass/admin-change-pass.component';
import { AdminForgotPassComponent } from './admin/admin-forgot-pass/admin-forgot-pass.component';
import { AdminEditUserComponent } from './admin/admin-edit-user/admin-edit-user.component';
import { AdminViewUserComponent } from './admin/admin-view-user/admin-view-user.component';
import { AdminAddUserComponent } from './admin/admin-add-user/admin-add-user.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';

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
     AdminSidebarComponent,
     AdminUserComponent,
     AdminAddUserComponent,
     AdminViewUserComponent,
     AdminEditUserComponent,
     AdminForgotPassComponent,
     AdminChangePassComponent,

     TrailerDetailComponent,
     TrailerPricingComponent,
     TrailerPhotoComponent,
     TestimonialBoxComponent,
     BlogComponent,
     BlogDetailComponent,

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
    AngularFireAuthModule,
    FlashMessagesModule,
    OwlModule,
    DatepickerModule.forRoot() ,
    TypeaheadModule.forRoot()

  ],
  providers: [ApiService, AuthGuard, NotAuthGuard, ClientAuthGuard, ClientNotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
