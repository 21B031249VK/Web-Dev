import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Photo} from "../models";
import {PHOTOS} from "../fake-db";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];
  photo: Photo;
  loaded: boolean;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.photos = [];
    this.photo = {} as Photo;
    this.loaded = true;
  }

  ngOnInit(): void {
    //this.photos = PHOTOS;
    this.getPhotos();
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    })
  }
}
