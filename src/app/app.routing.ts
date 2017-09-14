import {RouterModule} from '@angular/router';
import { RvsListingComponent } from './shared/rvs-listing/rvs-listing.component';
import { HomeComponent } from './routes/home/home.component';
 import { NotFoundComponent } from './routes/not-found/not-found.component';
import { RvListsComponent } from './shared/rv-lists/rv-lists.component';
import { RvDetailComponent } from './routes/rv-detail/rv-detail.component';
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
import { BlogComponent } from './routes/blog/blog.component';
import { BlogDetailComponent } from './routes/blog-detail/blog-detail.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';

import { FaqRenterComponent } from './routes/faq-renter/faq-renter.component';
import { FaqOwnerComponent } from './routes/faq-owner/faq-owner.component';
import { DashboardRenterComponent } from './routes/dashboard-renter/dashboard-renter.component';
import { AboutUserComponent } from './shared/about-user/about-user.component';
import { UserFavouriteComponent } from './shared/user-favourite/user-favourite.component';
import { UserMessageComponent } from './shared/user-message/user-message.component';
import { MsgDetailComponent } from './shared/msg-detail/msg-detail.component';

export const Routing = RouterModule.forRoot([
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'rent-trailer',
        component: RvsListingComponent,
         children: [
            {
                path: '',
                component: RvListsComponent
            },
            {
                path: 'rv-list',
                component: RvListsComponent
            },
            {
                path: 'rv-list/:id',
                component: RvDetailComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent,
        children: [
            {
                path: '',
                component: SignupRenterComponent
            },
            {
                path: 'renter',
                component: SignupRenterComponent
            },
            {
                path: 'owner',
                component: SignupOwnerComponent
            }
        ]
    },
    {
        path: 'list-trailer',
        component: ListTrailerComponent,
        children: [
            {
                path: '',
                component: TrailerSpecificationComponent
            },
            {
                path: 'specification',
                component: TrailerSpecificationComponent
            },
            {
                path: 'location',
                component: TrailerLocationComponent
            },
            {
                path: 'details',
                component: TrailerDetailComponent
            },
            {
                path: 'pricing',
                component: TrailerPricingComponent
            },
            {
                path: 'photo',
                component: TrailerPhotoComponent
            }

        ]
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/:id',
        component: BlogDetailComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'faq-renter',
        component: FaqRenterComponent
    },
    {
        path: 'faq-owner',
        component: FaqOwnerComponent
    },
    {
        path: 'renter',
        component: DashboardRenterComponent,
        children: [
            {
                path: '',
                component: AboutUserComponent
            },
            {
                path: 'about',
                component: AboutUserComponent
            },
            {
                path: 'favourite',
                component: UserFavouriteComponent
            },
            {
                path: 'message',
                component: UserMessageComponent
            },
            {
                path: 'message/:id',
                component: MsgDetailComponent
            }
        ]
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
    path: '**',
        redirectTo: '/404'
    }
]);
