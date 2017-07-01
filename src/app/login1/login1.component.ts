import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'],
   encapsulation:ViewEncapsulation.Native// here with style output displayed
})
export class Login1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
