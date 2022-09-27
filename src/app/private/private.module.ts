import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule, SharedModule],
})
export class PrivateModule {}
