import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { AdditemgroupComponent } from './additemgroup/additemgroup.component';
import { ViewitemgroupComponent } from './viewitemgroup/viewitemgroup.component';
import { EdititemgroupComponent } from './edititemgroup/edititemgroup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SortDirective } from './directive/sort.directive';
import { GroupPipe } from './pipes/group.pipe';
@NgModule({
  declarations: [
    GroupComponent,
    AdditemgroupComponent,
    ViewitemgroupComponent,
    EdititemgroupComponent,
    SortDirective,
    GroupPipe
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
 FormsModule,
 ReactiveFormsModule

  ]
})
export class GroupModule { }
