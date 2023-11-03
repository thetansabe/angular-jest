import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { PaginatedPokemon, Pokemon } from '../services/poke.model';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent {
  pokemons$: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);;
  limit: number = 20;
  offset: number = 0;
  isFinished: boolean = false;

  subscriptionNotifier: Subject<void> = new Subject<void>();

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.getNewBatch(this.limit, this.offset);
  }

  onScroll(){
    console.log('scrolled');
    this.offset += this.limit;
    this.getNewBatch(this.limit, this.offset);
  }

  getNewBatch(limit: number, offset: number){
    this.pokeService
      .getPokemons(limit, offset)
      .pipe(takeUntil(this.subscriptionNotifier))
      .subscribe((pokemons: PaginatedPokemon) => {
        this.pokemons$.next([...this.pokemons$.getValue(), ...pokemons.results]);
      });
  }

  ngOnDestroy(): void {
    this.subscriptionNotifier.next();
    this.subscriptionNotifier.complete();
  }
}
