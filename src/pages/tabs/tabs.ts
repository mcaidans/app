import { Component } from '@angular/core';

import { ViewPage } from '../view/view';
import { VouchersPage } from '../voucher/voucher';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VouchersPage;
  tab2Root = ViewPage;

  constructor() {

  }
}
