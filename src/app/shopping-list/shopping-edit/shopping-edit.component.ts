import { Component, ElementRef, EventEmitter, OnInit,ViewChild,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem()
  {
    const name = this.nameInputRef.nativeElement.value;
    const amt = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(name,amt);
    this.ingredientAdded.emit(ingredient);

  }

}
