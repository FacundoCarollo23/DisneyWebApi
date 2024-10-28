import { AfterViewInit, Component, OnInit } from '@angular/core';


import { SwiperComponent } from "swiper/angular";

// import Swiper core and required components
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
  selector: 'app-slider-principal',
  templateUrl: './slider-principal.component.html',
  styleUrls: ['./slider-principal.component.css']
})
export class SliderPrincipalComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

    
    var myswiper = new Swiper('.swiper',  {
      
      modules: [Navigation, Pagination, Scrollbar],
      speed: 500,
      loop: true,
      slidesPerView: 1.26,
      centeredSlides: true,
      spaceBetween: 30,
      navigation: true,
      setWrapperSize: true,
      simulateTouch: true,
      
    
 
      
     
  
      
     
      pagination: {
        el: '.swiper-pagination',
     
        clickable: true,
        type: 'bullets',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        bulletClass: 'swiper-pagination-bullet',
        
       
        
      }
   
    
    });

    
    
  
  }

  

}
