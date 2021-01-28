import { Component, OnInit } from '@angular/core';
import { Item, Bag } from 'src/app/services/item.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  item!: Item
  color!: {
    name: string,
    color_hash: string
  }
  size!: number
  images = [
    'assets/img/products/JORDAN DELTA.jpg',
    'assets/img/products/KYRIE 7 EP.jpg'
  ]
  imageSrc = this.images[0]
  activeSize:any
  activeColor:any

  constructor() { }

  ngOnInit(): void {
    this.item=history.state
    console.log(history.state)
  }

  onclick(image:string) {
    this.imageSrc = image;
  }

  onClickColor(color:any) {
    this.color = color
    this.activeColor = color
    console.log(this.color)
  }

  onClickSize(size:any) {
    this.size = size
    this.activeSize = size
    console.log(this.size)
  }

  addToBag() {
    if(!this.color || !this.size) {
      alert('Select Color and Size')
      return
    }
    let bags:Bag[] = JSON.parse(localStorage.getItem('bag') || '[]')
    const bag:Bag = {
      name: this.item.name,
      price: this.item.price,
      sizes: this.size,
      colors: this.color,
      qty: 1          
    }
    if(bags.length == 0){
      bags.push(bag)
    }else{
      let flag = false
      for (let i = 0; i < bags.length; i++) {
        if(bags[i].name == this.item.name && bags[i].colors.color_hash == this.color.color_hash && bags[i].sizes == this.size ){
          bags[i].qty ++
          flag = true
          break
        }
        // console.log(bags[i].name)
      }
      if(!flag)bags.push(bag)
    }
    localStorage.setItem('bag', JSON.stringify(bags))
  }

}
