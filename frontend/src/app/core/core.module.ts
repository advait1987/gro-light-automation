import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RPiComponentService } from './service/rpicomponent/rpicomponent.service';

import { AlertComponent } from './component/alert/alert.component';
import { PanelListGroupComponent } from './component/panel-list-group/panel-list-group.component';
import { RPiComponentFormComponent } from './component/rpicomponent-form/rpicomponent-form.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent
  ],
  declarations: [
    AlertComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent
  ],
  providers: [
    RPiComponentService
  ]
})
export class CoreModule { }