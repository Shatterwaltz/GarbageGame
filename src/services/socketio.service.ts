import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Socket } from 'dgram';



@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private socket;
  constructor() { 
    this.socket = io('http://localhost:3000');
  }

  /**
   * Send a message to the server
   * @param Name the event
   * @param Data to send along with the event
   */
  public emit(event: string, message?: any){
    message ? this.socket.emit(event, message) : this.socket.emit(event);
  }

  public on(event: string, callback: any){
    this.socket.on(event, callback);
  }
}
