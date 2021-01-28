import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Bag {
  name: string,
  price: number,
  sizes: number,
  colors: {
      name: string,
      color_hash: string
    },
  qty: number
}

export interface Shoes {
  shoes: Item[]
}

export interface Item {
  name: string,
  category: string,
  description: string,
  price: number,
  sizes: [
    number
  ],
  colors: [
    {
      name: string,
      color_hash: string
    }
  ],
  video: string
}

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  url:string = "https://my-json-server.typicode.com/megasuartika/fe-assignment/db"
  constructor(private http: HttpClient) {  }
  getItem() {
    // now returns an Observable of Config
    return this.http.get<Shoes>(this.url);
  }
}
