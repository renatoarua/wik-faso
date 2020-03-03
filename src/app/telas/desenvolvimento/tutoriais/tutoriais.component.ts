import { Component, OnInit } from '@angular/core';
import { TutorialData, listaTutorialData } from './tutorial-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutoriais',
  templateUrl: './tutoriais.component.html',
  styleUrls: ['./tutoriais.component.css']
})
export class TutoriaisComponent implements OnInit {
  listaTutoriais=TutorialData;
 
 
  constructor(
    private router: Router
    
  ) { }

  ngOnInit() {
    this.listaTutoriais.forEach(element => {
      element['tutoriais']=listaTutorialData.filter(c => c.idTipoTutorial == element.idTipoTutorial);
    });
  }
  clickBotao() {
    this.router.navigate([history.go(-1)])

        }
 
}
