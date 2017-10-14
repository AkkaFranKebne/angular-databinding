import { Component, OnInit, Input } from '@angular/core';   //Input needs to be imported

@Component({
  selector: 'app-sever-element',
  templateUrl: './sever-element.component.html',
  styleUrls: ['./sever-element.component.css']
})
export class SeverElementComponent implements OnInit {
    @Input('srvElement') element: {type: string, name: string, content: string};  //js element, with a decorator @Input() to make it accessible form outside, for other components, alias in parenthesis

  constructor() { }

  ngOnInit() {
  }

}
