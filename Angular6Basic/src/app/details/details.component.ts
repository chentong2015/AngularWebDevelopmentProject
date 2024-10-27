import { Component, OnInit } from '@angular/core';

// use the data service in this component
import { DataService } from '../data.service';
// treate the data return form API  ===> subscribe !!!
import { Observable } from 'rxjs';
// get parametre form the router lien !!!!!
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // Get user ID and send it to API site with the same variable
  user$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(dataReturn => this.user$ = dataReturn);
  }

}
