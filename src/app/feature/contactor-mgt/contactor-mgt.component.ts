import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactor-mgt',
  templateUrl: './contactor-mgt.component.html',
  styleUrls: ['./contactor-mgt.component.scss'],
})
export class ContactorMgtComponent implements OnInit {
  Client: any = '{{Client}}';
  colData: any = [
    {
      field: 'contractorName',
      header: 'Contractor name',
    },
    {
      field: 'type',
      header: 'Type',
    },
    {
      field: 'date',
      header: 'Start date',
    },
    {
      field: 'amount',
      header: 'Amount',
    },
    {
      field: 'status',
      header: 'Status',
    },
    {
      field: 'actions',
      header: 'Actions',
    },
  ];

  gridData: any = [
    {
      imagePath: './assets/images/contractor1.svg',
      contractorName: 'Darlene Robertson',
      type: 'Traditional',
      date: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'Active',
    },
    {
      imagePath: './assets/images/contractor2.svg',
      contractorName: 'Darlene Robertson',
      type: 'Traditional',
      date: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'Active',
    },
    {
      imagePath: './assets/images/contractor3.svg',
      contractorName: 'Darlene Robertson',
      type: 'Traditional',
      date: 'Mar 4, 2021',
      amount: '$200 USD',
      status: 'Signature pending',
    },
  ];

  actions: any = [
    {
      name: 'Edit ',
      imgUrl: 'edit-icon.svg',
      click: (e: any, action: any, event: any) => {
       console.log('Edit');
       
      },
      
    },
    {
      name: 'Sign',
      imgUrl: 'sign-icon.svg',
      click: (e: any, action: any, event: any) => {
          console.log('Sign');
          

      },
      
    },
    {
      name: 'View Summary',
      imgUrl: 'viewDoc-icon.svg',
      click: (e: any, action: any, event: any) => {
        console.log('View');
        

      },
      
    },
    {
      name: 'Delete',
      imgUrl: 'delete-icon.svg',
      click: (e: any, action: any, event: any) => {
          console.log('Delete');
          

      },
      
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
