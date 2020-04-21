import { Component, OnInit } from '@angular/core';
import {Waste} from '../waste/waste.component';
import {DataService} from '../service/data/data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  waste: Waste[];

  constructor(private wasteService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.showWaste();
  }
  showWaste() {
    this.wasteService.retrieveAllWaste().subscribe(
      response => {
        console.log("Retrieve all waste for list them in admin page: ");
        console.log(response);
        this.waste = response;
      });
  }


  deleteWaste(id) {
    this.wasteService.deleteWaste(id).subscribe(
      response => {
        console.log(response);
        console.log(`Delete waste ${id} successful`);
        this.showWaste();
      });
  }

  updateWaste(id) {
    this.router.navigate(['waste', id]);
  }
  createWaste() {
    this.router.navigate(['waste']);
  }
}
