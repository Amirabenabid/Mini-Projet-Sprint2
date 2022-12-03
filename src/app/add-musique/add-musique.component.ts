import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { musique } from '../model/musique.model';
import { musiqueService } from '../services/musique.service';
import { style } from '../model/style.model';

@Component({
  selector: 'app-add-musique',
  templateUrl: './add-musique.component.html'
})
export class AddmusiqueComponent implements OnInit {

  newmusique = new musique();
  styles! : style[];
  newIdst! : number;
newstyle! : style;

constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private musiqueService: musiqueService) { }
  

  ngOnInit(): void {
    this.musiqueService.listestyles().
    subscribe(sts => {this.styles = sts._embedded.styles;
    console.log(sts);
});
   // this.styles = this.musiqueService.listestyles();
  }


addmusique(){
  this.newmusique.style = this.styles.find(st => st.idst == this.newIdst)!;

  this.musiqueService.ajoutermusique(this.newmusique).subscribe(musiq => {
  console.log(musiq);
  this.router.navigate(['musiques']);
  });
  }
  
  }


