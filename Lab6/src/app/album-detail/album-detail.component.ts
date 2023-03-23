import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fake-db";
import {Album} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  editedAlbum: Album;
  loaded: boolean;
  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
    this.album = {} as Album;
    this.editedAlbum = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.album = ALBUMS.find((album) => album.id === id) as Album;
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    })

  }

  editAlbum(){
    this.album.title = this.editedAlbum.title;
  }

}
