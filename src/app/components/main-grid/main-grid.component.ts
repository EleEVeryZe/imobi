import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../model/imovel.model';
import { ImovelService } from '../../services/imovel.service';
import { ImovelComponent } from '../imovel/imovel.component';

@Component({
  selector: 'app-main-grid',
  imports: [CommonModule, ImovelComponent],
  templateUrl: './main-grid.component.html',
  styleUrl: './main-grid.component.scss'
})
export class MainGridComponent implements OnInit {
  imoveis!: Imovel[];
  
  constructor(imovelService: ImovelService) {
      this.imoveis = imovelService.getAll();
   }
  
  ngOnInit(): void {
    
  }
}
