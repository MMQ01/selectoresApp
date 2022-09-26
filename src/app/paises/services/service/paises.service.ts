import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl:string='https://restcountries.com/v3.1'
  private baseUrlv2:string='https://restcountries.com/v2/'
  private _regiones : string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  get regiones(): string[]{    
    return [...this._regiones]
  }
  constructor(private http: HttpClient) { }



  getPaisesPorRegion(region:string): Observable<PaisSmall[]>{

    const url: string=`${this.baseUrl}/region/${region}`
    return this.http.get<PaisSmall[]>(url)

  }

  getPaisPorCodigo(codigo: string):Observable<PaisSmall[] | null>{

    if(!codigo){
      return of(null)
    }
    const url=`${this.baseUrl}/alpha?codes=${codigo}`
    return this.http.get<PaisSmall[]>(url)

  }

  getPaisPorCodigoSmall(codigo: string):Observable<PaisSmall | null>{

  
    const url=`${this.baseUrl}/alpha?codes=${codigo}?fields=cca3,name`
    return this.http.get<PaisSmall>(url)

  }



}
