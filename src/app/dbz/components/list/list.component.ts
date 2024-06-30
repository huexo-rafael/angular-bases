import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Output()
  public onNewDelete: EventEmitter<number> =new EventEmitter();

  @Output()
  public deleteCharacterEmitById: EventEmitter<string>=new EventEmitter();

  @Input()
  public characterList: Character[] =[{
    name: 'Trunk',
    power:10
  }];
  constructor() { }

  // TODO: Emitir el ID del personaje
  onDeleteCharacter(index:number):void {
    //debugger;
    this.onNewDelete.emit(index);
    console.log({index});

  }

  deleteCharacterById(character:Character):void{
    this.deleteCharacterEmitById.emit(character.id);
  }


}
