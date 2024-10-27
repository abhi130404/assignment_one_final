import { Component } from '@angular/core';
import { inject,OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css'
})
export class UserListComponentComponent {
  httpClient = inject(HttpClient);
  public data: Array<any> = [];
  ngOnInit() {
    this.httpClient.get('http://localhost:8000/users')
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.data = data;
        }, error: (err) => console.log(err)
      });
  }
}
