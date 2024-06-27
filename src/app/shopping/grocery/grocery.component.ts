import { Component, OnInit } from '@angular/core';

const groceryItems = [
  {
    id: 1,
    name: "Spinach",
    img: "../../../assets/images/spinach.jpeg",
    actualPricePerKg: 40,
    discountedPricePerKg: 34,
    weight: "1 KG",
    count: 0,
  },
  {
    id: 2,
    name: "Alu/Potato",
    img: "../../../assets/images/potato.png",
    actualPricePerKg: 25,
    discountedPricePerKg: 30,
    weight: "1 KG",
    count: 0,
  },
  {
    id: 3,
    name: "Banana",
    img: "../../../assets/images/banana.jpeg",
    actualPricePerKg: 50,
    discountedPricePerKg: 40,
    weight: "1 KG",
    count: 0,
  },
  {
    id: 4,
    name: "Brinjal",
    img: "../../../assets/images/brinjal.jpeg",
    actualPricePerKg: 55,
    discountedPricePerKg: 45,
    weight: "1 KG",
    count: 0,
  },
  {
    id: 5,
    name: "Onion",
    img: "../../../assets/images/onion.jpeg",
    actualPricePerKg: 40,
    discountedPricePerKg: 36,
    weight: "1 KG",
    count: 0,
  },
  {
    id: 6,
    name: "Brinjal",
    img: "../../../assets/images/brinjal.jpeg",
    actualPricePerKg: 40,
    discountedPricePerKg: 36,
    weight: "1 KG",
    count: 0,
  }

];

export {groceryItems}


@Component({
  selector: 'app-grocery',
  standalone: false,
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent implements OnInit {

  groceryList:any[] = groceryItems;

  ngOnInit(): void {
    console.log("333", this.groceryList);
    
  }

}
