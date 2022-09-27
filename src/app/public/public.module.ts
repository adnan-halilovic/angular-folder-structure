import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}
