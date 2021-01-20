import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit
{
  newSongs: any[] = [];
  loading: boolean;
  errorObtained: boolean;
  errorMessage: string;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;
    this.errorObtained = false;
    this.spotifyService.getNewReleases()
    .subscribe( ( data: any ) => {
      this.newSongs = data;
      this.loading = false;
    }, ( error ) => {
      this.errorObtained = true;
      this.errorMessage = error.error.error.message;
      this.loading = false;
    } );
  }

  ngOnInit() {
  }
}
