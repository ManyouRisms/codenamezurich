import { Component, OnInit, Input } from '@angular/core';
import {Character} from "../models/character";

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input()
  character:Character;

  constructor() {}

  ngOnInit() {}

}