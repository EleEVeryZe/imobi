import { Routes } from "@angular/router";
import { ImovelDetailsComponent } from "./components/imovel-details/imovel-details.component";
import { MainGridComponent } from "./components/main-grid/main-grid.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const routes : Routes = [  
  
  { path: "details/:id", component: ImovelDetailsComponent },
  { path: "", component: MainGridComponent },
  { path: "not-found", component: NotFoundComponent }, 
]
