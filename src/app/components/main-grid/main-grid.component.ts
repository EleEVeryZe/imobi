import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Filtro, Imovel } from '../../model/imovel.model';
import { ImovelService } from '../../services/imovel.service';
import { ScrollService } from '../../services/scroll.service';
import { FilterComponent } from '../filter/filter.component';
import { ImovelComponent } from '../imovel/imovel.component';

@Component({
  selector: 'app-main-grid',
  imports: [CommonModule, ImovelComponent, FilterComponent],
  templateUrl: './main-grid.component.html',
  styleUrl: './main-grid.component.scss'
})
export class MainGridComponent {
  imoveis!: Imovel[];
  
  constructor(private readonly imovelService: ImovelService, private readonly scrollService: ScrollService) {
      this.imoveis = imovelService.getAll();
  }

  handleFiltrar(filtro: Filtro) {
    this.imoveis = this.imovelService.filterBy(filtro);
  }
}
