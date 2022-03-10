import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

  constructor() { }

  imgSRC:string = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.giant-bicycles.com%2Fus%2Ftalon-2&psig=AOvVaw1f1M7brVYAjlpTXgvTyKAG&ust=1647037108668000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC-87_JvPYCFQAAAAAdAAAAABAS';

  ngOnInit(): void {
  }

}
