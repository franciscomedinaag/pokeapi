import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  pokemonId: any;
  pokemon:any={types:[]};
  constructor(public api:DataApiService, public activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonId=this.activated.snapshot.paramMap.get("id");
    this.getPokemon(this.pokemonId)
  }

  getPokemon(id:any){
    this.api.get('https://pokeapi.co/api/v2/pokemon/'+id, {})
    .subscribe(async (pokemon:any)=>{
      this.pokemon=pokemon
      this.api.get('https://pokeapi.co/api/v2/pokemon-species/'+id, {})
      .subscribe((specie:any)=>{
        this.pokemon.description=specie.flavor_text_entries[0].flavor_text
        console.log(this.pokemon)
      })
    })
  }

}
