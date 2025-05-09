import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskDirective } from 'ngx-mask';
import { ImovelService } from '../../../services/imovel.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, CommonModule, MatButtonToggleModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatButtonModule, MatInputModule, NgxMaskDirective],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  matcher = new MyErrorStateMatcher();
  tipoImoveis!: string[];

  createImovel = new FormGroup({
    observacoes: new FormControl<string | null>(''),
    operacao: new FormControl<string | null>('COMPRAR'),
    tipo: new FormControl<string | null>(''),
    qtdQuartos: new FormControl<number | null>(0),

    valor: new FormControl<number | null>(0),
    valorCondominio: new FormControl<number | null>(0),
    valorIPTU: new FormControl<number | null>(0)
  });

  constructor(imovelService: ImovelService) {
    this.tipoImoveis = imovelService.getTipoImoveis();
  }


  async invokeLambda() {
    const response = await fetch('https://rn5pjlgu8k.execute-api.sa-east-1.amazonaws.com/imovel', {
      method: 'POST', // or GET, depending on your Lambda setup
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Meu pastor é Jesus, tá amarrado' })
    });
    console.log(response);

    const result = await response.text();
    console.log('Lambda response:', result);
  }

  create() {

  }
}
