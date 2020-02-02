import { Component, OnInit } from '@angular/core';
import { MonedaDataService } from '../service/data/moneda-data.service';

export class CambiarMoneda{
  constructor(public monto:number,
              public montoCambiado:number,
              public monedaOrigen:string,
              public monedaDestino:string,
              public tipoCambio:number){}
}

export class ResCambiarMoneda{
  constructor(public errorCode:string,
              public data:CambiarMoneda){}
}

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent implements OnInit {

  denominaciones: any[] = [
    { id: 'soles', nombre: 'soles' },
    { id: 'dolares', nombre: 'dolares' },
    { id: 'euros', nombre: 'euros' }
  ];

  monedaOrigen:string
  monedaDestino:string
  monto:number
  montoCambiado:number

  cambiarMoneda:CambiarMoneda
  resCambiarMoneda:ResCambiarMoneda

  msjError:string

  constructor(private monedaService:MonedaDataService

  ) { }

  ngOnInit() {
    this.monedaOrigen = 'dolares'
    this.monedaDestino = 'soles'
    this.monto = 0
  }

  convertir(){
    if(this.monedaOrigen === this.monedaDestino){
      this.msjError = 'Debe seleccionar diferentes denominaciones!!'
    }else{
      this.monedaService.convertirMonto(this.monto, this.monedaOrigen, this.monedaDestino).subscribe(
        response =>{
          this.resCambiarMoneda = response;
        }
      )
    }

  }

}
