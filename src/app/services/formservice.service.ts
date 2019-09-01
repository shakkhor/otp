import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Formservice {

  private getUrl = '';
  private postUrl = '';

  providerList = [
    {id: 1, name:'Bkash'},
    {id: 2, name:'Rocket'},
    {id: 3, name: 'Telegram'},
    {id: 4, name: 'AAAA'},
    {id: 5, name: 'BBBB'},
    {id: 6, name: 'CCCC'},
    {id: 7, name:'DDDD'},
    {id: 8, name:'EEEE'},
    {id: 9, name:'FFFF'},
    {id: 10, name:'GGGG'},
  ];

  constructor() { }

  getProvider(){
    return this.providerList;

    
  }

  postForm(f){
    console.log(f);

  }

}
