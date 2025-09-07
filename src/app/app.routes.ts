import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ListMembers } from './components/members/list-members/list-members';
import { CreateMembers } from './components/members/create-members/create-members';
import { ListResultDetails } from './components/details/result-details/list-result-details/list-result-details';
import { CreateResultDetails } from './components/details/result-details/create-result-details/create-result-details';
import { ListBusinessDetails } from './components/details/business-details/list-business-details/list-business-details';
import { CreateBusinessDetails } from './components/details/business-details/create-business-details/create-business-details';
import { Contacts } from './components/contacts/contacts';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "members",
        component: ListMembers
    },
    {
        path: "members/create",
        component: CreateMembers
    },
    {
        path: "details/result",
        component: ListResultDetails
    },
    {
        path: "details/result/create",
        component: CreateResultDetails
    },
    {
        path: "details/business",
        component: ListBusinessDetails
    },
    {
        path: "details/business/create",
        component: CreateBusinessDetails
    },
    {
        path: "contacts",
        component: Contacts
    }
];
