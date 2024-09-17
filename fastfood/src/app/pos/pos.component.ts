import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RestServiceService } from '../rest-service.service';
import { Pedido } from '../pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {

  private service = inject(RestServiceService);
  pedido: Pedido = new Pedido();

  sendOrder(form: NgForm)
  {
    if(form.valid)
    {
      this.pedido.number = Math.floor(Math.random() * 1000);
      this.service.pushPedido(this.pedido);
      console.log(this.pedido);
      this.pedido = new Pedido();
    }
    else{
      alert("Hubo un problema procesando su pedido");
    }
  }

}
