import {  AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { SwiperComponent } from "swiper/angular";
import { OverlayContainer } from '@angular/cdk/overlay';
import { AccordionModule} from 'primeng/accordion';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { modals } from 'index';



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
  Swiper

} from 'swiper';
import { Movie } from '../../Models/movies.models';
import { MoviesService } from 'src/app/Services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slider-films',
  templateUrl: './slider-films.component.html',
  styleUrls: ['./slider-films.component.css']
})



export class SliderFilmsComponent implements OnInit {


  movie: Movie [] = [];
  
  constructor(private service : MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {


  


    var swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Scrollbar],
      speed: 1000,
    
 
      slidesPerView: 6.2,
     
      initialSlide: 2,
      spaceBetween: 25,
      navigation: true,
       centeredSlides: true,
      watchOverflow: false,
      preloadImages: true,
      simulateTouch: true,
      setWrapperSize: true,

    });
  }














 
}

