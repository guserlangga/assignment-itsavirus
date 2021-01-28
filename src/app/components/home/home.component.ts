import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items!: Item[];
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.itemService.getItem().subscribe(item => {
      this.items = item.shoes
      // localStorage.setItem("bag", JSON.stringify(shoes.shoes))
      
    }, error => {
      console.log(error); 
    })
    
  }

}
