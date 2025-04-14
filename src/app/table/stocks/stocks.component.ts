import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultComponent } from '../result/result.component';

interface Registro {
  id: string,
  unitPrice: number;
  unitQtd: number;
  unitTotal: number;
  unitDescription: string;
  boughtDate: string;
  previousUnitPrice: number,
  isPriceCheaper: boolean
}

@Component({
  selector: 'app-stocks',
  imports: [CommonModule, FormsModule ],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StocksComponent {
  @ContentChildren(ResultComponent) cautiousComponent !: QueryList<ResultComponent>;
  public registros = [
    { id: "1", isPriceCheaper: true, previousUnitPrice: 8, unitPrice: 10.5, unitQtd: 5, unitTotal: 21, boughtDate: "27/02/1993", unitDescription: 'Item A' },
    { id: "2", isPriceCheaper: true, previousUnitPrice: 55, unitPrice: 7.99, unitQtd: 2, unitTotal: 14.98, boughtDate: "27/02/1993", unitDescription: 'Item B' },
    { id: "3", isPriceCheaper: false, previousUnitPrice: 19, unitPrice: 20.0, unitQtd: -3,unitTotal: -60, boughtDate: "27/02/1993", unitDescription: 'Item C' }, 
  ] as Registro[];
  @Input() name = {name: "rodolfo"};
  @Output() nameChangedFn = new EventEmitter<{name: string}>();

  constructor() {}


  ngAfterContentInit() {
    console.log("blkajsf")
    this.cautiousComponent.forEach(x => x.sayBeCautios());
  }

  trackStock(idx: string, stock: Registro) {
    return stock.id;
  } 

  sell(id: string) {
    this.registros = this.registros.filter(reg => reg.id !== id);
  }

  nameChanged() {
    this.nameChangedFn.emit(this.name);
  }
}
