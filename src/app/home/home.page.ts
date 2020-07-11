import { Component } from '@angular/core';


//Available hackers for the heist
const hackers = [
  "Avi Schwartzman",
  "Paige Harris",
  "Christian Feltz",
  "Rickie Luckens"
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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  onClick = () => {
    if(document.getElementById("boxApp").checked){
      const approach = this.elegirRandom(approaches);
      this.cambiarTxtLabel("lblApproach", "Approach: " + approach);
    }
    else{
      document.getElementById("lblApproach").hidden = true;
    }
    const hacker = this.elegirRandom(hackers);
    this.cambiarTxtLabel("lblHacker", ("Hacker: " + hacker));  
  }

  cambiarTxtLabel = (id, txt) => {
    const lblrndm = document.getElementById(id);
    lblrndm.innerHTML = txt;
    lblrndm.hidden = false;
  }

  elegirRandom = arr => {
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];
  }
}
