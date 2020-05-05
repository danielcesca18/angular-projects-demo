import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : string = 'http://google.com';
  valorAtual : string;
  isMouseOver : boolean = false;

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(event){
   this.valorAtual = ((<HTMLInputElement>event.target).value);
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
