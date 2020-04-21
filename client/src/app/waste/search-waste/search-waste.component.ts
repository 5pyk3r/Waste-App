import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data/data.service';
import {ActivatedRoute} from '@angular/router';
import {Waste, WasteType} from '../waste.component';
import {wasteType} from '../create-waste/create-waste.component';

@Component({
  selector: 'app-search-waste',
  templateUrl: './search-waste.component.html',
  styleUrls: ['./search-waste.component.css']
})
export class SearchWasteComponent implements OnInit {

  passedName: string;
  waste: Waste = {
    id: null,
    name,
    wasteType
  }

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.passedName = this.route.snapshot.params.name;
    this.findWaste();
 }
  findWaste() {
    this.dataService.findByName(this.passedName)
      .subscribe(value => {
          this.waste = value;
      });
  }
}
