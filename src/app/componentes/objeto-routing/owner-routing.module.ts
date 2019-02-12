import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ObjetoCreateComponent } from '../objeto-create/objeto-create.component';

import { OwnerDetailsComponent } from '../objeto-details/owner-details.component';
import { OwnerListComponent } from '../objeto-list/owner-list.component';
import { OwnerUpdateComponent } from '../objeto-update/owner-update.component';
import { OwnerDeleteComponent } from '../objeto-delete/owner-delete.component';



const routes: Routes = [
  { path: 'lista', component: OwnerListComponent },
  { path: 'details/:id', component: OwnerDetailsComponent },
  { path: 'create', component: ObjetoCreateComponent },
  { path: 'update/:id', component: OwnerUpdateComponent },
  { path: 'delete/:id', component: OwnerDeleteComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OwnerRoutingModule { }
