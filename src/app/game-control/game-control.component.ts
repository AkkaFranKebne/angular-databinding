import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    @Output('start') startGame = new EventEmitter<{seconds: number}>(); 
    @Output('stop') stopGame = new EventEmitter<{seconds: number}>(); 
    
    timer = null;
    //secondsArray = [];
    seconds = 0;
    

  constructor() { }

  ngOnInit() {
  }
    
    startingGame() {
        this.timer = setInterval(() => { 
            this.seconds += 1;
            this.startGame.emit({
                seconds: this.seconds
            });
        }, 1000);
    }
    
    stopingGame() {
            clearInterval(this.timer);
            this.timer = null;
            this.seconds = 0;
            this.stopGame.emit({
                seconds: this.seconds
            });
    }
}



