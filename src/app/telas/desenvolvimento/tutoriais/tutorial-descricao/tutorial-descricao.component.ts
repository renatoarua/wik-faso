import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listaTutorialData } from '../tutorial-data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: 'tutorial-descricao.component.html'
})

export class TutorialDescricaoComponent implements OnInit {

    linkVideo:string ="https://www.youtube.com/embed/YX0y1FMlb8I";
    objTutorial:any= {};
    constructor(private route: ActivatedRoute){}
    ngOnInit(): void {
        const idTutorial = this.route.snapshot.params.tutorialId;
        this.objTutorial=listaTutorialData.filter(c => c.id== idTutorial)[0];
        
        if(this.objTutorial.linkVideo != "")
        this.linkVideo = this.objTutorial.linkVideo;
       console.log(this.objTutorial)
    }

}

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(url) {
        debugger
        var link = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        return link
    }

}