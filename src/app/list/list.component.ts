import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  myArray:string[] = ["Hello", "test"];
  presidents:string[] = ["Higgins", "McAleese", "Robinson", "Hilary"];

  presidents2: any[] =
    [{name: "Higgins", term:"2011-"},
    {name: "McAleese", term:"1997-2011"},
    {name: "Robinson", term:"1990-1997"},
    {name: "Hillery", term:"1976-1990"},
    {name: "O Dalaigh", term:"1974-1976"}];

}
