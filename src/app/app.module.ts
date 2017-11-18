import { RecaptchaModule } from 'ng2-recaptcha';
import { ApiService } from './api.service';
import { GlobaldataService } from './globaldata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule, Routes, Router, RouterLinkActive } from '@angular/router';
import { Routing } from './app.routing';

/* Guard Services */
import { ClientNotAuthGuard } from './guards/clientNotAuth.guard';
import { ClientAuthGuard } from './guards/clientAuth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AuthGuard } from './guards/auth.guard';

/* plugins */


import { TypeaheadModule, BsDatepickerModule , AccordionModule, CarouselModule, RatingModule } from 'ngx-bootstrap';

import { MyDatePickerModule } from 'mydatepicker';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';
import { FlashMessagesModule } from 'angular2-flash-messages';

/* Firebase Dependencey */

import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { OwlModule } from 'ngx-owl-carousel';
import {CalendarComponent} from '../../node_modules/ap-angular2-fullcalendar/src/calendar/calendar';

/* components */

import { AppComponent } from './shared/app/app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RvsListingComponent } from './shared/rvs-listing/rvs-listing.component';
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
import { RvComponent } from './routes/rv/rv.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { FaqRenterComponent } from './routes/faq-renter/faq-renter.component';
import { FaqOwnerComponent } from './routes/faq-owner/faq-owner.component';
import { DashboardRenterComponent } from './routes/dashboard-renter/dashboard-renter.component';
import { AboutUserComponent } from './shared/about-user/about-user.component';
import { UserFavouriteComponent } from './shared/user-favourite/user-favourite.component';
import { UserMessageComponent } from './shared/user-message/user-message.component';
import { MsgDetailComponent } from './shared/msg-detail/msg-detail.component';

import { UserReviewComponent } from './shared/user-review/user-review.component';

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

import { SubscribePlanComponent } from './routes/subscribe-plan/subscribe-plan.component';
import { TermsConditionComponent } from './routes/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './routes/privacy-policy/privacy-policy.component';

import { AdminCmsPageComponent } from './admin/admin-cms-page/admin-cms-page.component';
import { AdminAddCmsPageComponent } from './admin/admin-add-cms-page/admin-add-cms-page.component';
import { AdminViewCmsPageComponent } from './admin/admin-view-cms-page/admin-view-cms-page.component';
import { AdminEditCmsPageComponent } from './admin/admin-edit-cms-page/admin-edit-cms-page.component';
import { EditorComponent } from './helper/editor/editor.component';

import { AdminListTrailerComponent } from './admin/admin-list-trailer/admin-list-trailer.component';
import { AdminAddListTrailerComponent } from './admin/admin-add-list-trailer/admin-add-list-trailer.component';
import { AdminEditListTrailerComponent } from './admin/admin-edit-list-trailer/admin-edit-list-trailer.component';
import { AdminViewListTrailerComponent } from './admin/admin-view-list-trailer/admin-view-list-trailer.component';

import { DashboardOwnerComponent } from './routes/dashboard-owner/dashboard-owner.component';
import { AboutOwnerComponent } from './shared/about-owner/about-owner.component';
import { OwnerMsgComponent } from './shared/owner-msg/owner-msg.component';
import { MsgDetailOwnerComponent } from './shared/msg-detail-owner/msg-detail-owner.component';
import { OwnerReviewComponent } from './shared/owner-review/owner-review.component';
import { OwnerPackageComponent } from './shared/owner-package/owner-package.component';
import { OwnerAdsComponent } from './shared/owner-ads/owner-ads.component';
import { UserDashboardComponent } from './routes/user-dashboard/user-dashboard.component';
import { EditAboutUserComponent } from './shared/edit-about-user/edit-about-user.component';
import { UserDetailMessageComponent } from './shared/user-detail-message/user-detail-message.component';
import { AdminComponent } from './admin/admin/admin.component';


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
     FileSelectDirective,

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
     RvComponent,
     AboutUsComponent,
     FaqRenterComponent,
     FaqOwnerComponent,


     SubscribePlanComponent,
     TermsConditionComponent,
     PrivacyPolicyComponent,

     AdminCmsPageComponent,
     AdminAddCmsPageComponent,
     AdminViewCmsPageComponent,

     AdminEditCmsPageComponent,
     EditorComponent,
     AdminEditCmsPageComponent,


     DashboardRenterComponent,
     AboutUserComponent,
     UserFavouriteComponent,
     UserMessageComponent,
     MsgDetailComponent,

     AdminListTrailerComponent,
     AdminAddListTrailerComponent,
     AdminEditListTrailerComponent,
     AdminViewListTrailerComponent,

     UserReviewComponent,
     DashboardOwnerComponent,
     AboutOwnerComponent,
     OwnerMsgComponent,
     MsgDetailOwnerComponent,
     OwnerReviewComponent,
     OwnerPackageComponent,
     OwnerAdsComponent,
      CalendarComponent,
      UserDashboardComponent,
      EditAboutUserComponent,
      UserDetailMessageComponent,
      AdminComponent,

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
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    RecaptchaModule.forRoot()

  ],
  providers: [ApiService, AuthGuard, NotAuthGuard, ClientAuthGuard, ClientNotAuthGuard, GlobaldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
