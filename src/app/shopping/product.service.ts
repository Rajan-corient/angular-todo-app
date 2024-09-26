import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Iproduct } from './shopping.model';

const groceryItems: Iproduct[] = [
  {
    id: 1,
    name: 'Spinach',
    img: 'assets/images/spinach.jpeg',
    actualPricePerKg: 40,
    discountedPricePerKg: 34,
    weight: '1 KG',
    count: 0,
  },
  {
    id: 2,
    name: 'Alu/Potato',
    img: 'assets/images/potato.png',
    actualPricePerKg: 25,
    discountedPricePerKg: 30,
    weight: '1 KG',
    count: 0,
  },
  {
    id: 3,
    name: 'Banana',
    img: 'assets/images/banana.jpeg',
    actualPricePerKg: 50,
    discountedPricePerKg: 40,
    weight: '1 KG',
    count: 0,
  },
  {
    id: 4,
    name: 'Brinjal',
    img: 'assets/images/brinjal.jpeg',
    actualPricePerKg: 55,
    discountedPricePerKg: 45,
    weight: '1 KG',
    count: 0,
  },
  {
    id: 5,
    name: 'Onion',
    img: 'assets/images/onion.jpeg',
    actualPricePerKg: 40,
    discountedPricePerKg: 36,
    weight: '1 KG',
    count: 0,
  },
  {
    id: 6,
    name: 'Brinjal',
    img: 'assets/images/brinjal.jpeg',
    actualPricePerKg: 40,
    discountedPricePerKg: 36,
    weight: '1 KG',
    count: 0,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Iproduct[]> {
    return of(groceryItems).pipe(delay(1000));
  }
}
