import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadComponent } from './lead.component';
import { ViewleadsComponent } from './viewleads/viewleads.component';
import { EditleadsComponent } from './editleads/editleads.component';
import { AddleadsComponent } from './addleads/addleads.component';


@NgModule({
  declarations: [
    LeadComponent,
    ViewleadsComponent,
    EditleadsComponent,
    AddleadsComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule
  ]
})
export class LeadModule { }
