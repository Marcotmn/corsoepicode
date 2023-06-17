import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { Movies } from 'src/app/models/movies.interface';
import { AuthData } from 'src/app/auth/auth-data';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movies[] | undefined;
  user!: AuthData | null;

  constructor(private moviesSrv: MoviesService, private authSrv: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.moviesSrv.recupera().subscribe((_movies: Movies[]) => {
        this.movies = _movies
      });
    }, 1000);

    this.authSrv.user$.subscribe((_user) => {
      this.user = _user;
    })
  }

}
