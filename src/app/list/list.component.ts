import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//Import common module for ngFor*
@Component({
  selector: 'app-list',
  imports: [CommonModule],
  //dont forget to add CommonModule here as well
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  presidents: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];
//the array we are pulling from for data binding
}
