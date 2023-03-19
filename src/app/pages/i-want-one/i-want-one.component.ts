import { Component } from '@angular/core';
import { vCard } from 'src/app/models/vCard';

@Component({
  selector: 'app-i-want-one',
  templateUrl: './i-want-one.component.html',
  styleUrls: ['./i-want-one.component.scss']
})
export class IWantOneComponent {
  
  // variables
  public vCard: vCard = new vCard();
  public firstName: string;

  constructor() {}

  ngOnInit(){
  }

  // methods
  submit() {
    console.log("this.vCard", this.vCard.firstName);
    alert(this.vCard.firstName);
  }
}
