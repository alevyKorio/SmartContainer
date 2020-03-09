import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-smart-container',
  templateUrl: './smart-container.component.html',
  styleUrls: ['./smart-container.component.scss']
})
export class SmartContainerComponent implements OnInit, AfterViewInit {

  rowArr: Array<Array<Element>> = new Array<Array<Element>>();

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let container = document.getElementById('smart-container-id');
    let content: HTMLCollection = container.children;
    let count = content.length;
    let rowMap: Map<number, Array<Element>> = new Map<number, Array<Element>>();
    let arr: Array<Element> = new Array<Element>();

    console.log('There are ' + count + ' children');
    for (let i = 0; i < count; i++) {
      arr.push(content.item(i));
    }

    for (let el of arr) {
      let rowNum = parseInt(el.getAttribute('row'));
      if (!rowMap.has(rowNum)) {
        rowMap.set(rowNum, new Array<Element>());
      }
        rowMap.get(rowNum).push(el);
    }

    let keyIt = rowMap.keys();
    let keyArr = new Array<number>();
    for(let i of keyIt){
      keyArr.push(i);
    }

    keyArr = keyArr.sort();

    for(let i of keyArr){
      this.rowArr.push(rowMap.get(i));
    }

    for (let i = 0; i < this.rowArr.length; i++) {
      let rowWrapper = this.renderer.createElement('div');
      this.renderer.addClass(rowWrapper, "row")
      for(let el of this.rowArr[i]){
        let colWrapper = this.renderer.createElement('div');
        this.renderer.addClass(colWrapper, 'col');
        this.renderer.appendChild(colWrapper, el);
        this.renderer.appendChild(rowWrapper, colWrapper);
      }
      this.renderer.appendChild(container, rowWrapper);
    }
  }

}
