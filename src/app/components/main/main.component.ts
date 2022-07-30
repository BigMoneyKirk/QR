import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { VCard } from "ngx-vcard";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public firstname = `Stephen`;
  public lastname = `Kirkland`;
  public fullname;
  public nickname = `BigMoneyKirk`;
  public occupation = `Website Developer`;
  public phonenumber = `912-536-7419`;
  public businessemail = `skirkland.job@gmail.com`;

  constructor(public imageService: ImageService) { }

  ngOnInit() {
    this.fullname = `${this.firstname} "${this.nickname}" ${this.lastname}`;
  }

  public vCard: VCard = {
    name: {
      firstNames: this.firstname,
      lastNames: this.lastname,
    },
    telephone: [this.phonenumber],
    email: [this.businessemail],
    workEmail: ["kirklandenterprisesunlimited@gmail.com"],
    role: "CEO of Kirkland Enterprises Unlimited",
    url: "https://BigMoneyKirk.github.io/QR/",
    sound: "../../assets/sounds/Stephen_Kirkland.m4a",
    logo: "../../assets/images/logos/KEU_Logo_FullColor.png",
    photo: "Li4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvcy9LRVVfTG9nb19GdWxsQ29sb3IucG5n",
    note: "Creator of the QR Virtual Business Card"
  };

}
