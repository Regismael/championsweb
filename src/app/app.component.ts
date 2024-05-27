import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NgxPaginationModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   
  vendas : any[] = [];

  paginador: number = 1;

  constructor(
    private httpClient : HttpClient
  ){}

  ngOnInit(): void {
    this.httpClient.get<any>('http://localhost:5108/api/Vendas') 
    .subscribe({
      next : (data) =>{
        console.log(data.result);
        this.vendas = data.result as any[]; 
      },
      error : (e) =>{
        console.log(e.error)
      }
    })
  }

  onMessage1(): void {
    this.httpClient.get<any>('http://localhost:5108/api/Vendas/flutuacao-preco') 
    .subscribe({
      next : (data) =>{
        console.log(data);
        this.vendas = data.$values as any[]; 
      },
      error : (e) =>{
        console.log(e.error)
      }
    })
  }

  onMessage2(): void {
    this.httpClient.get<any>('http://localhost:5108/api/Vendas/precos-iguais') 
    .subscribe({
      next : (data) =>{
        console.log(data);
        this.vendas = data.$values as any[]; 
      },
      error : (e) =>{
        console.log(e.error)
      }
    })
  }

  onMessage3(): void {
    this.httpClient.get<any>('http://localhost:5108/api/Vendas/precos-altos') 
    .subscribe({
      next : (data) =>{
        console.log(data);
        this.vendas = data.$values as any[]; 
      },
      error : (e) =>{
        console.log(e.error)
      }
    })
  }

  handlePageChange(event: any): void {
    this.paginador = event;
  }

}
