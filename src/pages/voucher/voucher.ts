import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-voucher',
  templateUrl: 'voucher.html'
})
export class VoucherPage {

  constructor(public navCtrl: NavController) {
      this.voucher = [
          'assets/imgs/test.jpg'
      ];

  }

}
