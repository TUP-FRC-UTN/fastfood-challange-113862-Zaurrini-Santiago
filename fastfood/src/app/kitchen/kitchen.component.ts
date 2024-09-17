import { Component, inject } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { Pedido } from '../pedido';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  private service = inject(RestServiceService);
  lstPedidos: Pedido[] = this.service.getPedidos();
  toCook: Pedido = new Pedido();

  cook(index: number)
  {
    this.toCook = this.lstPedidos[index];
    this.lstPedidos.splice(index, 1);    
  }
}
