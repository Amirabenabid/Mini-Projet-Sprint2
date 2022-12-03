import { Component, OnInit } from '@angular/core';
import { style } from '../model/style.model';
import { musiqueService } from '../services/musique.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-styles',
  templateUrl: './liste-styles.component.html',
  styles: []
})
export class listestylesComponent implements OnInit {
  styles!:style[];
  updatedst:style = {"idst":0,"nomst":""};
  ajout:boolean=true;

  constructor(private musiqueService: musiqueService, public authService: AuthService) { }


  ngOnInit(): void {
    this.musiqueService.listestyles().subscribe(sts => {this.styles = sts._embedded.styles;
     console.log(sts);
});

  }
  chargerstyles(){
    this.musiqueService.listestyles().subscribe(sts => {this.styles = sts._embedded.styles;
console.log(sts);
});
  }
  
  styleUpdated(st:style){
    console.log("st updated event",st);
    this.musiqueService.ajouterstyle(st).
     subscribe( ()=> this.chargerstyles());
    }
    
      updatest(st:style) {
        this.updatedst=st;
        this.ajout=false; 
        }
      
          
       supprimerstyle(st: style)
        {
        let conf = confirm("Etes-vous sûr ?");
        /*if (conf)
        this.styleService.supprimerstyle(st.idstyle).subscribe(() => {
              console.log("style supprimé");
              this.chargerstyles();
        });*/
        }  
        
      
}
