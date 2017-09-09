import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router, RouterLinkActive } from '@angular/router';

import { Routing } from './app.routing';

/* plugins */

import { TypeaheadModule, DatepickerModule, AccordionModule   } from 'ngx-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';
import { OwlModule } from 'ngx-owl-carousel';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    MyDatePickerModule,
    RatingModule,
    IonRangeSliderModule,
    OwlModule,
    AccordionModule.forRoot(),
    DatepickerModule.forRoot() ,
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
