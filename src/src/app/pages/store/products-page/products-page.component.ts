import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Products } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html' 
})
export class ProductsPageComponent implements OnInit {
  public products$?: Observable<Products[]>; //Convenção de quando o retorno e assincrono para lista coloca um $ na frente da variável

  constructor(private data: DataService) { 
    
  }

  //Significa que o componente já foi construido
  ngOnInit(): void {

   this.products$ = this.data.getProducts();   
    
  }

}
