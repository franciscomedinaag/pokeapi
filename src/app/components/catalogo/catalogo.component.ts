import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.services';
import { Observable } from 'rxjs/internal/Observable';
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  
  constructor(public api:DataApiService) { }
  
  public word: any;
  public pokemons:any=[]
  public offset:number=0
  public filtered:any=[]


  ngOnInit(): void {
    this.getPokemons(this.offset)
  }

  getPokemons(offset:number){
    this.api.get('https://pokeapi.co/api/v2/pokemon?offset='+offset+'&limit=20', {})
    .subscribe(async (pokemons:any)=>{
      this.pokemons=pokemons.results;
      this.filtered=pokemons.results
      for (let i = 0; i < this.pokemons.length; i++) {
        this.api.get(this.pokemons[i].url,{})
        .subscribe((pokemonFull)=>{
          this.pokemons[i]=pokemonFull
          this.filtered[i]=pokemonFull
        })
      } 
    })
  }

  displayAnterior(){
    if(this.offset>0){
      this.offset-=20;
      this.getPokemons(this.offset)
    }
  }

  displaySiguiente(){
    if(this.offset<=1080){
      this.offset+=20;
      this.getPokemons(this.offset)
    }
  }

  onSearchChange(): void {  
    console.log(this.word)
    if(this.word==""){
      this.filtered=this.pokemons
    }
    else{
       this.filtered=[];
       this.pokemons.forEach((pokemon:any) => {
         if(pokemon.name.toLowerCase().indexOf(this.word.toLowerCase())!=-1 || pokemon.id.toString().indexOf(this.word.toString())!=-1){
           this.filtered.push(pokemon);
         }
       });
    }
  }
     
}
