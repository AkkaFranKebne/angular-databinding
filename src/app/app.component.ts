import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated //default, every css is for one component only, None - css from this component is for all components
})
export class AppComponent {
  serverElements = [
      {
          type: 'server',
          name: 'Test server',
          content: 'this is a test server'
      }
  ];
    
    secondsArray = [];
    seconds = 0;
    

  onServerAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
    
    
    onStartGame(eventData: {seconds: number}) {
        this.secondsArray.push(eventData.seconds);
        this.seconds = eventData.seconds;
        console.log(this.seconds);
        console.log(this.secondsArray);
        
    }
    
    onStopGame() {
        this.secondsArray = [];
        this.seconds = 0;
        console.log(this.seconds);
        console.log(this.secondsArray);
    }
    
    showEven(){
        if (this.seconds %2 == 0 && this.seconds > 0) {
            return "inline";
        }
        else {
            return "none";
        }
    }
        showOdd(){
        if (this.seconds %2 != 0 && this.seconds > 0) {
            return "inline";
        }
        else {
            return "none";
        }
    }
}
