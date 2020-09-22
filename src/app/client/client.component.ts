import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public title = 'Client';
  constructor() { }

  ngOnInit(): void {
  }

}
