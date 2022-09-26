import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PaisesService } from '../../services/service/paises.service';
import { PaisSmall } from '../../interfaces/paises.interfaces';
import { switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup= this.fb.group({
    region:['',Validators.required],
    pais:['',Validators.required],
    frontera:['',Validators.required],
  })
  cargando:boolean=false
  regiones: string[]=[]
  paises : PaisSmall[]=[]
  // fronteras:  PaisSmall []=[]
   fronteras:  PaisSmall []=[]

  constructor( private fb:FormBuilder,
              private paisesService: PaisesService) { }


  ngOnInit(): void {

    this.regiones=this.paisesService.regiones;

    //cuando cambie la region

    // this.miFormulario.get('region')?.valueChanges
    // .subscribe(region =>{
    //   console.log(region);
    //   this.paisesService.getPaisesPorRegion(region)
    //   .subscribe(paises =>{
    //     console.log(paises);
        
    //     this.paises=paises
        
    //   })
    // });



    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap((_) =>{
          this.miFormulario.get('pais')?.reset('')
          this.cargando=true
      }),
      switchMap(region =>this.paisesService.getPaisesPorRegion(region))
    )
    .subscribe(paises =>{
     this.paises=paises
     this.cargando=false
    })

// cambia pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap(() =>{
      this.fronteras=[]
      this.miFormulario.get('fronteras')?.reset('')
      this.cargando=true
      }),
      switchMap( pais =>this.paisesService.getPaisPorCodigo(pais))
    )
    .subscribe( 
      pais =>{
      
       
        this.fronteras = pais || [];
        console.log( pais)
        this.cargando=false
       
      }
    )
  }

  guardar(){
    console.log(this.miFormulario.value);
    
  }

}
