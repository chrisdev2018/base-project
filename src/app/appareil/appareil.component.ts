import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  isAuth = false;
  recup: string = "";

  constructor(){
    setTimeout(
      ()=>{
        this.isAuth = true;
      }, 5000
    );   
  }
 
  nom: string = ""
  prenom: string = ""

  allumer()
  {
    if(this.nom != "" && this.prenom !=""){
      this.etudiants.push(
        {
          mat: this.nom,
          nom: this.prenom,
          note: 0
        }
      );
    }

    this.nom = "";
    this.prenom = "";
  }

  etudiants = [
    {
      mat: "001",
      nom: "fomekong",
      note: 12
    },
    {
      mat: "005",
      nom: "mongo",
      note: 15
    },
    {
      mat: "006",
      nom: "alex",
      note: 15
    },
    {
      mat: "009",
      nom: "charly",
      note: 5
    },
    {
      mat: "005",
      nom: "martial",
      note: 10
    },
    {
      mat: "005",
      nom: "carole",
      note: 2.5
    },
    {
      mat: "005",
      nom: "bertin",
      note: 6.5
    },
    {
      mat: "005",
      nom: "henri",
      note: 14.5
    }
  ]
  
  lastDate = new Date();
  
  ngOnInit() {
  }



}
