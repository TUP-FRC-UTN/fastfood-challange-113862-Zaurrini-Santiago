import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./pos/pos.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliveryPointComponent } from "./delivery-point/delivery-point.component";
import { RestServiceService } from './rest-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
  private service = inject(RestServiceService);
  lstPedidos = this.service.getPedidos();
}
