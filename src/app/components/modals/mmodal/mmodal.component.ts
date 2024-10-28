import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MoviesService } from 'src/app/Services/movies.service';
import { ContainerSearchComponent } from '../../movies/container-search/container-search.component';
import { SearchComponent } from '../../search/search.component';

@Component({
  selector: 'app-mmodal',
  templateUrl: './mmodal.component.html',
  styleUrls: ['./mmodal.component.css']
})
export class MmodalComponent {

  public show = false

 
  constructor(){ }




  showModal(){
    this.show = true;

  }

  hideModal() {

    this.show = false;

   
  
   


  


    
  
    

  }

  


  ngOnInit(): void {
    
    
 
  }

}
