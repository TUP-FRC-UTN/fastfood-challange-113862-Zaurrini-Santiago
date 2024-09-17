import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor() { }

  lstPedidos: Pedido[] = []

  pushPedido(pedido: Pedido) {
    this.lstPedidos.push(pedido);
  }

  getPedidos()
  {
    return this.lstPedidos;
  }
}
