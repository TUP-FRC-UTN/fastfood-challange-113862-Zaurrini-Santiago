import { Component, inject } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  private service = inject(RestServiceService);
  lstToDeliver: Pedido[] = this.service.getToDeliver();


  deliver(index: number) {
    alert("El pedido ha sido entregado!");
    this.lstToDeliver.splice(index, 1);
  }
}
