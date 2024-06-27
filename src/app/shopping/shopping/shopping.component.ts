import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  standalone: false,
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss',
})
export class ShoppingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('ShoppingComponent');
  }

  products = [
    {
      id: 1,
      name: "grocery",
      title: "Grocery",
      description: "Buy your grocery here...",
      img: "../../../assets/images/grocery.jpeg"
    },
    {
      id: 2,
      name: "fashion",
      title: "Fashion",
      description: "Buy your fashion here...",
      img: "../../../assets/images/fashion.jpeg"
    },
    {
      id: 3,
      name: "electronics",
      title: "Electronics",
      description: "Buy your electronics here...",
      img: "../../../assets/images/electronic.jpeg"
    },
    {
      id: 4,
      name: "home-furniture",
      title: "Home & Furniture",
      description: "Buy your Home & Furniture here...",
      img: "../../../assets/images/furniture.jpeg"
    }
  ];
  
}
