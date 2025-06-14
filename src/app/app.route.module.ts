import { Routes } from "@angular/router";
import { CreateComponent } from "./components/crud/create/create.component";
import { ListComponent } from "./components/crud/list/list.component";
import { ImovelDetailsComponent } from "./components/imovel-details/imovel-details.component";
import { MainGridComponent } from "./components/list-imoveis/main-grid/main-grid.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const routes : Routes = [  
  { path: "list", component: ListComponent },
  { path: "details/:id", component: ImovelDetailsComponent },
  { path: "create", component: CreateComponent },
  { path: "edit", component: CreateComponent },
  { path: "", component: MainGridComponent },
  { path: "not-found", component: NotFoundComponent },
  
]
