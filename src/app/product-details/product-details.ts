import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  product: any;
  id: number = 0;
  constructor(private apiservice:ApiService,private cdr: ChangeDetectorRef,private route:ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.apiservice.getProductDetails(this.id).subscribe((data: any) => {
      this.product = data;
      this.cdr.detectChanges();
    });
  }
}
