import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PublicModule, PrivateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
