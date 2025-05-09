import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import dayjs from 'dayjs';
import { NgxMaskDirective } from 'ngx-mask';
import { Imovel } from '../../../model/imovel.model';
import { ImovelService } from '../../../services/imovel.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxMaskDirective,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  formData!: FormData;
  imagensFiles = [] as File[];
  previewUrls: string[] = [];
  matcher = new MyErrorStateMatcher();
  tipoImoveis!: string[];
  selectedTabIndex!: number;
  httpClient!: HttpClient;

  createImovel = new FormGroup({
    //Informações do Imóvel
    operacao: new FormControl<string | null>('COMPRAR'),
    tipo: new FormControl<string | null>(''),
    qtdQuartos: new FormControl<string | null>(''),
    valor: new FormControl<string | null>(''),
    valorCondominio: new FormControl<string | null>(''),
    valorIPTU: new FormControl<string | null>(''),

    //Endereço
    rua: new FormControl<string | null>(''),
    numero: new FormControl<string | null>(''),
    bairro: new FormControl<string | null>(''),
    cidade: new FormControl<string | null>(''),
    estado: new FormControl<string | null>(''),
    cep: new FormControl<string | null>(''),

    //Características
    areaTotalM2: new FormControl<string | null>(''),
    areaConstruidaM2: new FormControl<string | null>(''),
    quantidadeBanheiros: new FormControl<number | null>(1),
    quantidadeSuites: new FormControl<number | null>(0),
    vagasGaragem: new FormControl<number | null>(1),
    dataCadastro: new FormControl<string | null>(dayjs().format('DD/MM/YYYY')),
    possuiPiscina: new FormControl<boolean | null>(false),
    possuiQuintal: new FormControl<boolean | null>(false),

    observacoes: new FormControl<string | null>(''),
  });

  constructor(imovelService: ImovelService, httpClient: HttpClient) {
    this.tipoImoveis = imovelService.getTipoImoveis();
    this.formData = new FormData();
    this.httpClient = httpClient;
    imovelService.getAll();
  }

  create() {
    if (!this.createImovel.valid) {
      alert('Formulário com campos inválidos');
      return;
    }
    this.imagensFiles.forEach((img, idx) => this.formData.append('file' + idx, img));
    this.formData.append('formData', JSON.stringify(Imovel.parsePlainObjectIntoImovel(this.createImovel.value)));
    return this.httpClient.post('https://rn5pjlgu8k.execute-api.sa-east-1.amazonaws.com/imovel', this.formData).subscribe(console.log); //https://rn5pjlgu8k.execute-api.sa-east-1.amazonaws.com/imovel
  }

  onFileSelected(event: any) {
    if (event.target.files.length) {
      const files = Array.from(event.target.files);
      files.forEach((file: any) => {
        this.imagensFiles.push(file);
        this.previewUrls.push(URL.createObjectURL(file));
      });
    }
  }
}
