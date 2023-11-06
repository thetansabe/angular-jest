import { TestBed } from "@angular/core/testing";
import { PokeService } from "./poke.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe('PokeService', () => {
    let service: PokeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule], //BE AWARE OF THIS
            providers: [PokeService]
        }).compileComponents();

        service = TestBed.inject(PokeService);

    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getPokemons', () => {

        it('should return a list of pokemons', () => {

            service.getPokemons(20, 0).subscribe((data) => {
                expect(data.results.length).toBe(20);
            });

        });
    });
});