import { Component, Input, output, OnInit, inject, TemplateRef,signal } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from '../../interfaces/character-list-response';
import { CharacterService } from '../../services/character-service';
import { CharacterDetailResponse } from '../../interfaces/character-detail-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { CharacterModal } from '../character-modal/character-modal';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit{

  characterService = inject(CharacterService);
  characterList = signal<Character[]>([]);
  private modalService = inject(NgbModal);


  ngOnInit() : void  {

    this.characterService.getAll().subscribe(resp => {
      this.characterList.set(resp.results)
    }
    );
  }

  openCharacterModal(id : string){

    this.characterService.getOne(id).subscribe(resp => {

      const modalRef = this.modalService.open(CharacterModal);
        modalRef.componentInstance.characterDetail = resp;

    });


  }




}
