import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';

import { MmodalComponent } from '../../modals/mmodal/mmodal.component';
import {  Movies } from '../../Models/movies.models';
import { SearchComponent } from '../../search/search.component';

import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  
  Swiper,
} from 'swiper';
;

@Component({
  selector: 'app-container-search',
  templateUrl: './container-search.component.html',
  styleUrls: ['./container-search.component.css']
})
export class ContainerSearchComponent implements OnInit {


 
  movies: Movies[] = [];
  NoEncontrada: any [] = [];
    data! : SearchComponent
   Titulo: string = ''
   modal!: MmodalComponent

    constructor(public search: MoviesService){
  
    }
  
  
 async   ngOnInit() {

  
 


   
    }
  
    async onMoveieselected(movie: string){
       
      if(movie.length > 0){
        try{
         
  
          const req:any = await this.search.getMovies(movie);
          if(req.results != 'false' ){
            this.Titulo = ''
            this.movies = req.results;
        
       
          }



         
       
         
            
          
        
        
      }catch(e){
       console.log(e)
      }
      }

   
  
    }


     
       
      
    }


  



    

