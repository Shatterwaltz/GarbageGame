import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SocketTestComponent } from 'src/components/socket-test/socket-test.component';
import { SocketioService } from 'src/services/socketio.service';

@NgModule({
  declarations: [
    AppComponent,
    SocketTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
