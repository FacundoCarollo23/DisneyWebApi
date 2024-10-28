import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{ FormControl, FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';
import {ChangeDetectorRef } from '@angular/core';
import { MmodalComponent } from '../modals/mmodal/mmodal.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() placeholder!: string 
   @Output() moviesSelected = new EventEmitter<string>();
   
   
  name!: string;

 
  

  constructor( public  api: MoviesService) {}


 


  seleccionarPelicula(){
    if(this.name != '' ){
     
       this.moviesSelected.emit(this.name);
     
      
     }
    

   }


  

 


  ngOnInit(): void{

   
   
 
  }



  

 











}




