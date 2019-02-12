import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ObjetoCreateComponent } from './objeto-create/objeto-create.component';

import { OwnerListComponent } from './objeto-list/owner-list.component';
import { OwnerRoutingModule } from './objeto-routing/owner-routing.module';
import { OwnerDetailsComponent } from './objeto-details/owner-details.component';
import { OwnerDataComponent } from './objeto-details/owner-data/owner-data.component';
import { AccountDataComponent } from './objeto-details/account-data/account-data.component';
import { OwnerUpdateComponent } from './objeto-update/owner-update.component';
import { OwnerDeleteComponent } from './objeto-delete/owner-delete.component';



@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [OwnerListComponent, OwnerDetailsComponent, OwnerDataComponent, AccountDataComponent, ObjetoCreateComponent, OwnerUpdateComponent, OwnerDeleteComponent]
})
export class ComponenteModule { }
