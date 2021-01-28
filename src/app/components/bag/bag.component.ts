import { Component, OnInit } from '@angular/core';
import { Item, Bag } from 'src/app/services/item.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {

  bags!: Bag[]

  constructor() { }

  ngOnInit(): void {
    this.bags = JSON.parse(localStorage.getItem('bag') || '[]')
  }

  deleteFromBag(bag:any) {
    // let bagsLocal: Bag[] = JSON.parse(localStorage.getItem('bag') || '[]')
    this.bags.forEach((item, index)=>{
      if(item == bag) {
        this.bags.splice(index, 1)
      }
    })
    localStorage.setItem('bag', JSON.stringify(this.bags))
  }

  totalPrice() {
    let total = 0
    for (let i = 0; i < this.bags.length; i++) {
      total = total + (this.bags[i].price * this.bags[i].qty)
    }
    return total
  }

}
