import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceOrderComponent implements OnInit {
  display: boolean = false;

  ngOnInit(){

  }

  showDialog() {
      this.display = true;
  }
}
