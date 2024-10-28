import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main/main.component';
import { SliderFilmsComponent } from './components/sliderFilms/slider-films/slider-films.component';


import { SliderPrincipalComponent } from './components/slider-principal/slider-principal.component';
import { CardsComponent } from './components/cardsDisney/cards/cards.component';
import{AsyncValidatorFn} from '@angular/forms'
import {modals} from 'index';
import{Routes, RouterModule, ExtraOptions} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ContainerSearchComponent } from './components/movies/container-search/container-search.component';

import { SwiperModule } from 'swiper/angular';
import { InicioComponent } from './components/home/inicio/inicio.component';
import { AppRoutingModule } from './Routes/app-routing.module';
import { InfoSearchComponent } from './components/movies/info-search/info-search.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SliderPrincipalComponent,
    CardsComponent,
    SliderFilmsComponent,
    InicioComponent,
   
 
    modals,
    SearchComponent,
    ContainerSearchComponent,
    InfoSearchComponent,

 
     
    

    
   
       
      
   
   
 
    
    
   
    

 
  
  ],
  imports: [
  
    

   
    BrowserModule,
     HttpClientModule,
     ReactiveFormsModule,
     FormsModule,
     AppRoutingModule,
     RouterModule,
     SwiperModule
    

    
    
    

   
     
    

    
  ],
  entryComponents: [


 
   
  ],

 
  
  providers: [

  ],
  bootstrap: [AppComponent]
})





export class AppModule { }
