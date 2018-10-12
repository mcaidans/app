import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VouchersPage } from '../voucher/voucher';
import { ViewPage } from '../view/view'

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
          },
          {
              image:'assets/imgs/test.jpg',
              id:'1'
          },
          {
              image:'assets/imgs/logo.png',
              id:'2'
          },
          {
              image:'assets/imgs/test.jpg',
              id:'1'
          },
          {
              image:'assets/imgs/logo.png',
              id:'2'
          },
          {
              image:'assets/imgs/test.jpg',
              id:'1'
          },
          {
              image:'assets/imgs/logo.png',
              id:'2'
          },
          {
              image:'assets/imgs/test.jpg',
              id:'1'
          },
          {
              image:'assets/imgs/logo.png',
              id:'2'
          },
      ];

  }

  openVoucher(id){
      this.navCtrl.push(ViewPage, {'data':id});
      //console.log(id);
  }


}
