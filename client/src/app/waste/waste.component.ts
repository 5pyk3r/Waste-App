import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {wasteType} from './create-waste/create-waste.component';

export class Waste {
  constructor(public id: number,
              public name: string,
              public wasteType: WasteType) {
  }
}
export class WasteType {
  constructor(public id: number,
              public name: string) {
  }
}
@Component({
  selector: 'app-waste',
  templateUrl: './waste.component.html',
  styleUrls: ['./waste.component.css']
})
export class WasteComponent implements OnInit {

  id: number;
  waste: Waste = {
    id: this.id,
    name,
    wasteType
  }
  wasteTypes: WasteType[];
  error = false;

  constructor(private router: Router, private wasteService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // getting specific id of chosen in admin page Waste
    this.id = this.activatedRoute.snapshot.params.id;
    console.log('Waste id: ' + this.id);
    // retriving data from database of a waste of specific id

    if (this.id != null) {
      this.getWasteById();
    }
    this.getAllWasteTypes();

    console.log('wasteTypes in wasteComponent: ' + this.wasteTypes);
  }
      getWasteById() {
        this.wasteService.retrieveWasteById(this.id)
          .subscribe (response => {
            console.log(response);
            this.waste = response;
          });
      }
      getAllWasteTypes() {
        this.wasteService.retrieveAllWasteTypes()
        .subscribe(data => {
        console.log('method getAllWastesTypes called');
        console.log(data);
        this.wasteTypes = data;
      });
  }

      updateWaste() {
          this.wasteService.updateWaste(this.waste.id, this.waste)
            .subscribe(data =>
              console.log('Created waste with data: ' + data));
          this.router.navigate(['admin']);
  }
}
