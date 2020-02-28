import { Component, OnInit } from '@angular/core';
import { TutorialData, listaTutorialData } from './tutorial-data';

@Component({
  selector: 'app-tutoriais',
  templateUrl: './tutoriais.component.html',
  styleUrls: ['./tutoriais.component.css']
})
export class TutoriaisComponent implements OnInit {
  listaTutoriais=TutorialData;
 
  constructor() { }

  ngOnInit() {
    this.listaTutoriais.forEach(element => {
      element['tutoriais']=listaTutorialData.filter(c => c.idTipoTutorial == element.idTipoTutorial);
    });
  }

}
