import { Component, OnInit } from '@angular/core';
import { Client } from '../models/Client';
import { ClientService } from './client.service';

@Component({
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public title = 'Client';
  public clients: Client[];
  constructor(private service: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void{
    this.service.getAll().subscribe(
      (response: Client[]) => {
        this.clients = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
