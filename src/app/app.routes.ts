import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { MainLayout } from './layout/main-layout/main-layout';
import { EventList } from './pages/event-list/event-list';
import { EventDetail } from './pages/event-detail/event-detail';
import { EventCreate } from './pages/event-create/event-create';
import { EventEdit } from './pages/event-edit/event-edit';
import { MyEvents } from './pages/my-events/my-events';
import { authGuard } from './auth-guard-guard';
import { notAuthGuard } from './not-auth-guard-guard';
import { EventSearch } from './pages/event-search/event-search';

export const routes: Routes = [
    {path: '', component: Login, canActivate: [notAuthGuard]},
    {path: 'register', component: Register, canActivate: [notAuthGuard]},
    {
        path: '',
        component: MainLayout,
        canActivate: [authGuard],
        children: [
            {path: 'event-list', component: EventList},
            {path: 'event-detail/:id', component: EventDetail},
            {path: 'event-create', component: EventCreate},
            {path: 'event-edit/:id', component: EventEdit},
            {path: 'my-events', component: MyEvents},
            {path: 'event-search', component: EventSearch}
        ]
    }
];
