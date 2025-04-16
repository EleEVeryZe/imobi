import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Imovel } from '../../model/imovel.model';

@Component({
  selector: 'app-imovel',
  imports: [CommonModule],
  templateUrl: './imovel.component.html',
  styleUrl: './imovel.component.scss'
})
export class ImovelComponent {
  @Input() imovel!: Imovel;

  ngOnInit() {
    console.log(this.imovel);
  }
}
