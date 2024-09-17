import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor() { }

  lstPedidos: Pedido[] = []
  pedidosToDeliver: Pedido[] = []

  pushPedido(pedido: Pedido) {
    this.lstPedidos.push(pedido);
  }

  toDeliver(pedido: Pedido) {
    this.pedidosToDeliver.push(pedido);
  }

  getToDeliver()
  {
    return this.pedidosToDeliver;
  }

  getPedidos()
  {
    return this.lstPedidos;
  }
}
