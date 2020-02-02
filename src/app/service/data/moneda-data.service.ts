import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResCambiarMoneda } from 'src/app/cambio/cambio.component';
import { ResBaseActualizarTipoCambio, ReqActualizarTipoCambio } from 'src/app/moneda/moneda.component';


@Injectable({
  providedIn: 'root'
})
export class MonedaDataService {

  constructor(
    private http:HttpClient
    ) {}
    
  convertirMonto(monto,monedaOrigen,monedaDestino){
    return this.http.get<ResCambiarMoneda>(`http://192.168.99.100:8085/cambiomoneda/cambiarmoneda/${monto}/${monedaOrigen}/${monedaDestino}`);
    // return this.http.get<ResCambiarMoneda>(`http://localhost:8085/cambiomoneda/cambiarmoneda/${monto}/${monedaOrigen}/${monedaDestino}`);
  }

  actualizarTipoCambio(ReqActualizarTipoCambio){
    return this.http.put<ResBaseActualizarTipoCambio>(`http://192.168.99.100:8085/cambiomoneda/actualizartipocambio`,
                                                      ReqActualizarTipoCambio);
    // return this.http.put<ResBaseActualizarTipoCambio>(`http://localhost:8085/cambiomoneda/actualizartipocambio`,
    //                                                   ReqActualizarTipoCambio);
  }
}
