import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ResultComponent } from './table/result/result.component';
import { StocksComponent } from './table/stocks/stocks.component';


@Component({
  selector: 'app-root',
  imports: [ResultComponent, CommonModule, FormsModule, RouterOutlet, StocksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = { name: "Rodolfo" } as {name: string};
  title = 'stockMarquetim';
  lastName = "" as string;
  

  nameChanged(event: {name: string}) {
    console.log(event);
    this.name = event;
  }

  changeNamePlease(event: any) {
    this.name = { name: event };
  }
}
