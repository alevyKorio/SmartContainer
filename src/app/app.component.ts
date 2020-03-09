import {AfterContentInit, AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  title = 'SmartContainer';

  ngAfterViewInit(): void {
    let foo = document.getElementById('app-smart-container');
    console.log('app-smart-container has: ' + foo.children.length);
  }
}
