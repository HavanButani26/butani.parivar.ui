import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-list-members',
  imports: [ButtonModule, TableModule, RouterModule],
  templateUrl: './list-members.html',
  styleUrl: './list-members.scss'
})
export class ListMembers {
  members = [
    { name: 'Havan Butani', district: 'amreli', contact: '7043179643', village: 'dalkhaniya' },
    { name: 'Mansi Butani', district: 'amreli', contact: '7043179643', village: 'dalkhaniya' },
    { name: 'Jaysukhbhai Butani', district: 'amreli', contact: '7043179643', village: 'dalkhaniya' },
    { name: 'Gitaben Butani', district: 'amreli', contact: '7043179643', village: 'dalkhaniya' },
    { name: 'Rasikbhai Butani', district: 'amreli', contact: '7043179643', village: 'dalkhaniya' },
    { name: 'Rudra Butani', district: 'amreli', contact: '7043179643', village: 'prempara' },
    { name: 'Rutva Butani', district: 'amreli', contact: '7043179643', village: 'prempara' },
    { name: 'Lalbhai Butani', district: 'amreli', contact: '7043179643', village: 'prempara' },
    { name: 'Ushaben Butani', district: 'amreli', contact: '7043179643', village: 'lalpur' },
    { name: 'Megha Butani', district: 'amreli', contact: '7043179643', village: 'lalpur' },
    { name: 'Bhargav Butani', district: 'amreli', contact: '7043179643', village: 'lalpur' },
    { name: 'Monika Butani', district: 'amreli', contact: '7043179643', village: 'lalpur' },
    { name: 'Bhagyavi Butani', district: 'amreli', contact: '7043179643', village: 'lalpur' },
    { name: 'Geetaben Butani', district: 'amreli', contact: '7043179643', village: 'lalpur' },
  ];
}
