import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MmodalComponent } from '../modals/mmodal/mmodal.component';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from 'src/app/app.component';
import {  MoviesService } from 'src/app/Services/movies.service';
import { data } from 'jquery';
import { debounceTime, distinctUntilChanged, filter, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})

export class HeaderComponent implements OnInit{
  private search! : SearchComponent 
  constructor( ){

    
  }
  

  ngOnInit(): void {


   
  }

  
   


  
   

 

   



}










