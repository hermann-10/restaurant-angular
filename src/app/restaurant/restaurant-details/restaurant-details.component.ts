import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { RestaurantData } from '../restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  resto!: RestaurantData;

  constructor(private route: ActivatedRoute, private service: ApiService, private router: Router){}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.service
    .find(id)
    .subscribe((resto: any) => (this.resto = resto));

    console.log('id:', id);
  }

  public goBack(){
    this.router.navigate(['/restaurant']);
  }
}
