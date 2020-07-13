import { Component } from '@angular/core';
import { concat } from 'rxjs';


//Available hackers for the heist
const hackers = [
  "Avi Schwartzman",
  "Paige Harris",
  "Christian Feltz",
  "Rickie Luckens",
  "Yohan Blair"
]

//The main approaches
const approaches = [
  "Silent & Sneaky",
  "The Big Con",
  "Aggressive"
]

//The disguises that can be used in the big con
const conDisguises = [
  "Gruppe Sechs",
  "Maintenance Crew",
  "Yung Ancestor",
  "Bugstars Crew"
]

const defaultPreps = [
  "Masks",
  "Patrol Routes",
  "Duggan Shipments",
  "Security Intel",
  "Power Drills",
  "Keycards"
]

const ssPreps = [
  "Infiltration Suits",
  "EMP Device"
]

const conPreps = [
  "Exit Disguise"
]

const aggPreps = [
  "Reinforced Armor",
  "Boring Machine"     //Is that its name?
]

const gunmen = [
  "Chester McCoy",
  "Gustavo Mota",
  "Patrick McReary",
  "Charlie Reed",
  "Karl Abolaji"
]

const drivers = [
  "Chester McCoy",
  "Eddie Toh",
  "Taliana Martínez",
  "Zach Nelson",
  "Karim Denz"
]

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onClick = () => {
    let defPreps;
    if(document.getElementById("boxApp").checked){
      document.getElementById("approach").hidden = false;
      let approach = this.chooseRandom(approaches);
      switch (approach){
        case "The Big Con":
          approach = approach + " with  the " + this.chooseRandom(conDisguises) + " disguise"
          defPreps = concat(defaultPreps,conPreps);
          break;
        case "Silent & Sneaky":
          defPreps = concat(defaultPreps,ssPreps);
          break;
        case "Aggressive":
          defPreps = concat(defaultPreps,aggPreps);
          break
      }
      this.changeLabelTxt("lblApproach", "Approach: " + approach);
    }
    else{
      document.getElementById("approach").hidden = true;
    }
    if(document.getElementById("boxCrew").checked){
      document.getElementById("crew").hidden = false;
      const hacker = this.chooseRandom(hackers);
      this.changeLabelTxt("lblHacker", ("Hacker: " + hacker));  
      const driver = this.chooseRandom(drivers);
      this.changeLabelTxt("lblDriver", "Driver: " + driver);
      const gunman = this.chooseRandom(gunmen);
      this.changeLabelTxt("lblGun", "Gunman: " + gunman);
    }
    else{
      document.getElementById("crew").hidden = true;
    }
    if(document.getElementById("boxPreps").checked){
      if(!defPreps){
        defPreps = defaultPreps;
      }
      let num = Math.floor(Math.random() * defPreps.length);
      let chosen = [];
      for(let i=0;i<num;i++){
        let gotOne = false;
        while(!gotOne){
          let element = this.chooseRandom(defPreps);
          if(!chosen.includes(element)){
            chosen.push(element);
            gotOne = true;
          }
        }
      }
      let preps = chosen.toString();
      preps.replace(",", "\n");
      document.getElementById("lblPreps").hidden = false;
      this.changeLabelTxt("lblPreps", preps);
      console.log("AAAAAAAAAAAAAAAAAAAA")
    }
    else{
      document.getElementById("lblPreps").hidden = true;
    }
  }

  changeLabelTxt = (id, txt) => {
    const lblrndm = document.getElementById(id);
    lblrndm.innerHTML = txt;
    lblrndm.hidden = false;
  }

  chooseRandom = arr => {
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
  }
}
