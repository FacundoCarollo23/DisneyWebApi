import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

import { MoviesService } from 'src/app/Services/movies.service';
import { Movie } from '../../Models/movies.models';

@Component({
  selector: 'app-info-search',
  templateUrl: './info-search.component.html',
  styleUrls: ['./info-search.component.css']
})
export class InfoSearchComponent implements OnInit, AfterViewInit {

  constructor(private service: MoviesService, private router: Router, private route: ActivatedRoute) { 
  
  }
private location! : Location;
movie: Movie = new Movie;

 ngOnInit(): void {
   
 }
async ngAfterViewInit(){


this.searchMoviesId()


}

async searchMoviesId(){
    const req: any = await this.service.getMovie(this.route.snapshot.params['id'])
    if(req.success != false) {
    this.movie = req;
  }
}




}



