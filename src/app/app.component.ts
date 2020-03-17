
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  analytical_Function: string[]
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', analytical_Function: ['function1', 'function2'] },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', analytical_Function: ['function3'] },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', analytical_Function: ['function4', 'function5'] },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', analytical_Function: [] },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', analytical_Function: ['function6'] },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', analytical_Function: ['function7', 'function8'] },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', analytical_Function: ['function9'] },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', analytical_Function: [] },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', analytical_Function: [] },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', analytical_Function: ['function10', 'function12'] },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'analytical_Function'];
  dataSource = ELEMENT_DATA;


  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }
}
