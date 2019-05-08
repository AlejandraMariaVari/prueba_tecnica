// Import Router
import { RouterModule, Routes } from '@angular/router';

// Import Components
import { FormComponent } from './components/form/form.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';


// All routes are added here
const ROUTES: Routes = [
    { path: 'form/:type', component: FormComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'app', component: AppComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);



