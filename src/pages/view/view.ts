import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'view.html'
})
export class ViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      var id = this.navParams.get('data');
      //this.id = id;
      console.log("data" +id);
      this.vouchers = [
          {
              image:'assets/imgs/test.jpg',
              id: 1
          },
          {
              image:'assets/imgs/logo.png',
              id:2
          }
      ];
      this.tv= this.vouchers.find(x => x.id ==id);

  }

  redeem(){
      console.log("redeem");
  }

}
