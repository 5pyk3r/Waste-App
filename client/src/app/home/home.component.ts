import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../service/data/data.service';
import {Waste} from '../waste/waste.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // waste: Waste;
  exists: boolean;
  name: string;
  error = false;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  searchWaste() {
    this.dataService.findByNameExists(this.name)
      .subscribe(data => {
        this.exists = data;
        console.log("this.exists in isExists" + this.exists);

        if (this.exists === true) {
          this.router.navigate(['search', this.name]);
        } else {
          this.error = true;
        }
      });
  }


}
