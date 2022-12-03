import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { musique } from '../model/musique.model';
import { musiqueService } from '../services/musique.service';
import { style } from "../model/style.model";
@Component({
  selector: 'app-update-musique',
  templateUrl: './update-musique.component.html',
  styles: [
  ]
})
export class UpdatemusiqueComponent implements OnInit {

  currentmusique = new musique();
  styles! : style[];
updatedstId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private musiqueService: musiqueService) { }

  ngOnInit(): void {
    this.musiqueService.listestyles().
     subscribe(sts => {this.styles = sts._embedded.styles;
      console.log(sts);
});
    this.musiqueService.consultermusique(this.activatedRoute.snapshot.params['id']).
    subscribe( musiq =>{ this.currentmusique = musiq;
      this.updatedstId = this.currentmusique.style.idst;
      
    } ) ;
}


  

 updatemusique() {
  this.currentmusique.style = this.styles.find(st => st.idst == this.updatedstId)!;

  this.musiqueService.updatemusique(this.currentmusique).subscribe(musiq => {
    this.router.navigate(['musiques']); }
    );
}
}


