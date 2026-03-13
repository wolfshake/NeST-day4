import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from '../card/card';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
   products: any[] = [];

  constructor(private apiservice: ApiService,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.apiservice.getProducts().subscribe((data: any) => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }
}
