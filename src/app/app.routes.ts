import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Products } from './products/products';

export const routes: Routes = [
    {
        path: '',component: Home
    },
    {
        path: 'contact',component: Contact
    },
   {
        path: 'products',component: Products
    }
];
