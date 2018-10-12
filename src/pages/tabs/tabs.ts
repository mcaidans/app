import { Component } from '@angular/core';


import { VouchersPage } from '../voucher/voucher';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VouchersPage;

  constructor() {

  }
}
