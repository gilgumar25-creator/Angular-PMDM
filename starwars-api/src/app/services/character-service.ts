import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'
import { CharacterListResponse } from '../interfaces/character-list-response' 
import { CharacterDetailResponse } from '../interfaces/character-detail-response' 

@Service()
export class CharacterService {

    private http = inject(HttpClient);


    getAll(): Observable<CharacterListResponse>{

        return this.http.get<CharacterListResponse>('https://swapi.dev/api/people/')
    }

    getOne(id: string): Observable <CharacterDetailResponse>{

        // ✅ backticks y ${id}
        return this.http.get<CharacterDetailResponse>(`https://swapi.dev/api/people/${id}`)
    }


}