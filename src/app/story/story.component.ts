import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor() { }

  storyTitle = "How to design a bike lane";

  storyBody = "Creat obvious and clearly marked pathways.\n" + 
  "Devise routes with destinations:\n"+
  "Barks\n"+
  "Schools\n"+
  "Commercial corridors";

  ngOnInit(): void {
  }

}
