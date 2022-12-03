import { Injectable } from '@angular/core';
import { musique } from '../model/musique.model';
import { style } from '../model/style.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { styleWrapper } from '../model/styleWrapped.model';
import { AuthService } from './auth.service';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class musiqueService {
  supprimerstyle(idstyle: any) {
    throw new Error('Method not implemented.');
  }
  apiURL: string = 'http://localhost:8080/musiques/api';
  apiURLst: string = 'http://localhost:8080/musiques/st';
  


  musiques !: musique[]; 
  

  constructor(private http : HttpClient,private authService :AuthService) { 
   
  }

 
    listemusique(): Observable<musique[]>{
      return this.http.get<musique[]>(this.apiURL+"/all");

      }
      
   
      ajoutermusique( musiq: musique):Observable<musique>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.post<musique>(this.apiURL, musiq, {headers:httpHeaders});
        }
        supprimermusique(id : number) {const url = `${this.apiURL}/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.delete(url, {headers:httpHeaders});
        }
        consultermusique(id: number): Observable<musique> {
        const url = `${this.apiURL}/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<musique>(url,{headers:httpHeaders});
        }
        updatemusique(musiq :musique) : Observable<musique> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.put<musique>(this.apiURL, musiq, {headers:httpHeaders});
        }
           
              listestyles():Observable<styleWrapper>{
                let jwt = this.authService.getToken();
                jwt = "Bearer "+jwt;
                let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.get<styleWrapper>(this.apiURLst,{headers:httpHeaders});
                }
                rechercherParstyle(idst: number):Observable< musique[]> {
                  const url = `${this.apiURL}/musiqsst/${idst}`;
                  return this.http.get<musique[]>(url);
                  }
                  rechercherParNom(nom: string):Observable< musique[]> {
                    const url = `${this.apiURL}/musiqsByName/${nom}`;
                    return this.http.get<musique[]>(url);
                    }   
            /*consulterstyle(id:number): style{ 
              return this.styles.find(st => st.idst == id)!;
              }*/
              ajouterstyle( st: style):Observable<style>{
                return this.http.post<style>(this.apiURLst, st, httpOptions);
                }
}
