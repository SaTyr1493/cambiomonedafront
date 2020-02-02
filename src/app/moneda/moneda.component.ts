import { Component, OnInit } from '@angular/core';
import { MonedaDataService } from '../service/data/moneda-data.service';

export class ReqActualizarTipoCambio{
  constructor(public tipoCambioNuevo:number,
              public monedaOrigen:string,
              public monedaDestino:string){}
}

export class ResActualizarTipoCambio{
  constructor(public tipoCambioAnterior:number,
              public tipoCambioNuevo:number,
              public monedaOrigen:string,
              public monedaDestino:string){}
}

export class ResBaseActualizarTipoCambio{
  constructor(public errorCode:string,
              public data:ResActualizarTipoCambio){}
}

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {

  denominaciones: any[] = [
    { id: 'soles', nombre: 'soles' },
    { id: 'dolares', nombre: 'dolares' },
    { id: 'euros', nombre: 'euros' }
  ];

  monedaOrigen:string
  monedaDestino:string
  nuevoTipoCambio:number

  reqActualizarTipoCambio:ReqActualizarTipoCambio
  resBaseActualizarTipoCambio:ResBaseActualizarTipoCambio

  msj:string
  
  msjError:string

  constructor(private monedaService:MonedaDataService) { }

  ngOnInit() {
    this.monedaOrigen = 'dolares'
    this.monedaDestino = 'soles'
  }

  actualizar(){
    if(this.monedaOrigen === this.monedaDestino){
      this.msjError = 'Debe seleccionar diferentes denominaciones!!'
    }else{
      this.reqActualizarTipoCambio = { 
        tipoCambioNuevo: this.nuevoTipoCambio,
        monedaOrigen: this.monedaOrigen,
        monedaDestino: this.monedaDestino
      }
  
      this.monedaService.actualizarTipoCambio(this.reqActualizarTipoCambio).subscribe(
        response =>{
          console.log(response);
          this.resBaseActualizarTipoCambio = response;
          this.msj = 'Se actualizó el Tipo de Cambio de ' 
                      + this.resBaseActualizarTipoCambio.data.tipoCambioAnterior
                      + ' a ' + this.resBaseActualizarTipoCambio.data.tipoCambioNuevo
        }
      )
    }
  }

}
