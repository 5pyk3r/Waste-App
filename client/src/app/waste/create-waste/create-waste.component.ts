import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Waste, WasteComponent, WasteType} from '../waste.component';

export const wasteType: WasteType = {
  id: null,
  name: ''
};
// export const waste: Waste = {
//   id: null,
//   name: '',
//   wasteType
// };
@Component({
  selector: 'app-create-waste',
  templateUrl: './create-waste.component.html',
  styleUrls: ['./create-waste.component.css']
})
export class CreateWasteComponent implements OnInit {

  waste: Waste = {
    id: null,
    name,
    wasteType
  };
  wasteTypes: WasteType[];
  isAlreadyExist: boolean;
  wasteError = false;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
      this.getAllWasteTypes();
  }

    saveWaste() {
      this.dataService.findByNameExists(this.waste.name)
        .subscribe(data => {
          this.isAlreadyExist = data;
          console.log("this.exists in isExists" + this.isAlreadyExist);
          if (this.isAlreadyExist === true) {
            this.wasteError = true;
          } else {
              this.dataService.createWaste(this.waste)
                .subscribe(data =>
                  console.log('Created waste with data: ' + data));
              this.router.navigate(['admin']);
            }
        });
    }

    getAllWasteTypes() {
      this.dataService.retrieveAllWasteTypes()
          .subscribe(data => {
          console.log('method getAllWastesTypes called');
          console.log(data);
          this.wasteTypes = data;
          });
  }
}
