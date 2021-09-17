import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeChallenge';
  gradeA;
  gradeB;
  gradeC;
  
  constructor(){
    this.gradeA = [12, 15, 11, 17, 19];
    this.gradeB = [10, 15, 17, 13, 19];
    this.gradeC = [18, 15, 19, 17, 14];
    this.uniqueGradeValues(this.gradeA, this.gradeB, this.gradeC);
  }

  private uniqueGradeValues(array1: any, array2: any, array3: any ) {
    let arrayBuffer = [];
    arrayBuffer = [...array1, ...array2, ...array3];

    let output = [];
    arrayBuffer.filter( item => {
      if (arrayBuffer.filter(a => a == item).length < 2) 
        output = [...output, item];
    });
    // console.table(arrayBuffer);
    console.log('unique gradevalues', output);
    return output;
  }
}
