import { Component, OnInit, EventEmitter, Output } from '@angular/core';  //EventEmitter imported, @Output  imported

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();     //property that is an event we can emit, @Output  because we want to send it outside
  @Output()  blueprintCreated= new EventEmitter<{serverName: string, serverContent: string}>();  
    
  newServerName = '';
  newServerContent = '';
 
  constructor() { }

  ngOnInit() {
  }
    
    onAddServer(){
        this.serverCreated.emit({
            serverName: this.newServerName, 
            serverContent: this.newServerContent}
                                );  //calling emit method
    }
   
    
    onAddBlueprint(){
        this.blueprintCreated.emit({
            serverName: this.newServerName, 
            serverContent: this.newServerContent}
                                );  //calling emit method
    }
    
}
