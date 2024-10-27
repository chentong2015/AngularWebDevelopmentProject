import { Component, OnInit } from '@angular/core';
// use the data service in this component
import { DataService } from '../data.service';
// treate the data return form API  ===> subscribe !!!
import { Observable } from 'rxjs';
// import Router for the params in siet lien !!!!!!
import { Data } from '@angular/router';

// import for animations
//import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // add animations here
  //animations: [
    /*
    trigger('listStagger', [ // name of the trigger
      transition('* <=> *', [  // from any state to any state
        query(
          ':enter',  // when enter load the page 
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
    */
 // ]
})
export class UsersComponent implements OnInit {

  // objet variable
  Users: Object;

  // Create an instance of data service
  constructor(private data: DataService) { }

  // Life cycle hooks
  ngOnInit() {
    this.data.getUsers().subscribe(dataReturn => this.Users = dataReturn);
  }

}
