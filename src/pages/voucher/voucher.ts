import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-voucher',
  templateUrl: 'voucher.html'
})
export class VouchersPage {

  constructor(public navCtrl: NavController) {
      this.vouchers = [
          {
              image:'assets/imgs/test.jpg',
              id:'1'
          },
          {
              image:'assets/imgs/logo.png',
              id:'2'
          }
      ];

  }

  openVoucher(id){

      console.log(id);
  }

}
