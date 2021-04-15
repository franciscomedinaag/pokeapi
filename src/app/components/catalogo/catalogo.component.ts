import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.services';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(public api:DataApiService) { }

  public pokemons:any=[]

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.api.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20', {})
    .subscribe(async (pokemons:any)=>{
      this.pokemons=pokemons.results;
      for (let i = 0; i < this.pokemons.length; i++) {
        console.log(this.pokemons[i].url)
        this.api.get(this.pokemons[i].url,{})
        .subscribe((pokemonFull)=>{
          this.pokemons[i]=pokemonFull
        })
      } 
    })
  }

     
}
