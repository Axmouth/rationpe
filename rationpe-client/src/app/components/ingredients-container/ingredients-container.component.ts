import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorStateMatcher } from '@angular-mdc/web';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface RecipeElement {
  name: string;
  quantity: number;
  type: string;
  target: number;
  typeMatcher: MyErrorStateMatcher;
  typeControl: FormControl;
  targetMatcher: MyErrorStateMatcher;
  targetControl: FormControl;
  quantityMatcher: MyErrorStateMatcher;
  quantityControl: FormControl;
  nameMatcher: MyErrorStateMatcher;
  nameControl: FormControl;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ingredients-container',
  templateUrl: './ingredients-container.component.html',
  styleUrls: ['./ingredients-container.component.scss'],
})
export class IngredientsContainerComponent implements OnInit {
  measurementUnits = [
    { value: 'g', viewValue: 'Grams' },
    { value: 'kg', viewValue: 'Kilograms' },
    { value: 'L', viewValue: 'Litres' },
    { value: 'mL', viewValue: 'milliLitres' },
    { value: 'cups', viewValue: 'cups' },
    { value: 'spoons', viewValue: 'spoons' },
  ];

  displayedColumns: string[] = ['name', 'quantity', 'type', 'target', 'actions'];
  dataSourceArray: RecipeElement[] = [];
  dataSource: MatTableDataSource<RecipeElement> = new MatTableDataSource(this.dataSourceArray);
  targetFactor = 1;
  @ViewChild('ingredientsTable', { static: true }) ingredientsTable;

  constructor() {}

  ngOnInit(): void {}

  addIngredient() {
    this.dataSource.data.push(this.createNewElement());
    this.ingredientsTable.renderRows();
  }

  createNewElement(
    name: string = '',
    quantity: number = 1,
    type: string = this.measurementUnits[0].value,
    target: number = 1,
  ): RecipeElement {
    const newElement: RecipeElement = {
      name,
      quantity,
      type,
      target,
      nameMatcher: new MyErrorStateMatcher(),
      nameControl: new FormControl(name, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      quantityMatcher: new MyErrorStateMatcher(),
      quantityControl: new FormControl(quantity, [Validators.required, Validators.min(0)]),
      typeMatcher: new MyErrorStateMatcher(),
      typeControl: new FormControl(type, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      targetMatcher: new MyErrorStateMatcher(),
      targetControl: new FormControl(target, [Validators.required, Validators.min(0)]),
    };
    return newElement;
  }

  updateFactor(element: RecipeElement) {
    this.targetFactor = element.targetControl.value / element.quantityControl.value;
    this.updateValues();
  }

  updateValues() {
    for (const element of this.dataSourceArray) {
      element.targetControl.setValue(element.quantityControl.value * this.targetFactor);
    }
  }

  removeIngredient(element: RecipeElement) {
    const index = this.dataSource.data.indexOf(element);
    this.dataSource.data.splice(index, 1);
    this.ingredientsTable.renderRows();
  }
}
