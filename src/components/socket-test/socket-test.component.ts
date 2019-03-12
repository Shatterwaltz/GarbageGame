import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/services/socketio.service';



@Component({
  selector: 'app-socket-test',
  templateUrl: './socket-test.component.html',
  styleUrls: ['./socket-test.component.css']
})
export class SocketTestComponent implements OnInit {
  public chatBoxText: string = '';
  public messagesList: string[] = [];
  
  constructor(private socketService: SocketioService) { }

  ngOnInit() {
    this.socketService.on('chat message', (message:string)=>{
      this.messagesList.push(message);
    });
  }

  sendMessage(){
    //send message to server
    this.socketService.emit('chat message', this.chatBoxText);
    this.chatBoxText = '';
  }

  addMessagetoList(message: string){
    this.messagesList.push(message);
  }
}
