import { Component, OnInit } from '@angular/core';
import { style } from '../model/style.model';
import { musique } from '../model/musique.model';
import { musiqueService } from '../services/musique.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-par-style',
  templateUrl: './recherche-par-style.component.html',
  styles: [
  ]
})
export class RechercheParstyleComponent implements OnInit {
  musiques! : musique[];
  Idstyle! : number;
  styles! : style[];

  constructor(private musiqueService:musiqueService, public authService: AuthService) { }

  ngOnInit(): void {
    
      this.musiqueService.listestyles().
      subscribe(sts => {this.styles = sts._embedded.styles;
      console.log(sts);
      });
      }
      onChange() {
        this.musiqueService.rechercherParstyle(this.Idstyle).
        subscribe(musiqs =>{this.musiques=musiqs});
        }
        chargermusiques(){
          this.musiqueService.listemusique().subscribe(musiqs => {
            console.log(musiqs);
            this.musiques = musiqs;
            });
        }
          
        supprimermusique(p: musique)
        {
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
        this.musiqueService.supprimermusique(p.idmusique).subscribe(() => {
              console.log("musique supprimé");
              this.chargermusiques();
        });
        }       
  }