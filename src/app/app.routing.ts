import { AdminChangePassComponent } from './admin/admin-change-pass/admin-change-pass.component';
import { AdminForgotPassComponent } from './admin/admin-forgot-pass/admin-forgot-pass.component';
import { AdminEditUserComponent } from './admin/admin-edit-user/admin-edit-user.component';
import { AdminViewUserComponent } from './admin/admin-view-user/admin-view-user.component';
import { AdminAddUserComponent } from './admin/admin-add-user/admin-add-user.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import { RvsListingComponent } from './routes/rvs-listing/rvs-listing.component';
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

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

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
            }
        ]
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },

    {
        path: 'admin',
        component: AdminLoginComponent,
        canActivate: [NotAuthGuard]
    },
    {
        path: 'admin/dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/user',
        component: AdminUserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/add-user',
        component: AdminAddUserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/view-user/:id',
        component: AdminViewUserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/edit-user/:id',
        component: AdminEditUserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin/forgot',
        component: AdminForgotPassComponent
    },
    {
        path: 'admin/change-password',
        component: AdminChangePassComponent
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
