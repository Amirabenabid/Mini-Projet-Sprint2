import { Component, OnInit } from '@angular/core';
import { musique } from '../model/musique.model';
import { musiqueService } from '../services/musique.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-musiques',
  templateUrl: './musiques.component.html'
})
export class musiquesComponent implements OnInit {

    musiques? : musique[]; //un tableau de musiques

  constructor(
    private musiqueService : musiqueService,
    public authService: AuthService) {
      
   //this.musiques=[];
     }

  ngOnInit(): void {
   this.chargermusiques();
    //this.musiques = this.musiqueService.listemusiques();
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
