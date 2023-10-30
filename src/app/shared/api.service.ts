import { Injectable } from '@angular/core';
import { RestaurantData } from '../restaurant/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //get all Data
  getAllRestaurant() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //post data
  postRestaurant(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  //update data
  updateRestaurant(data: any, id: number) {
    return this.http
      .put<any>('http://localhost:3000/posts/' + id, data)
      .pipe((res: any) => {
        return res;
      });
  }

  //delete data
  deleteRestaurant(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // getRestaurantById(restaurantId: number): RestaurantData {
  //   const restaurant:RestaurantData = this.restaurant.find(restaurant => restaurant.id === restaurantId
  //   );
  //   if (!restaurant) {
  //     throw new Error('restaurant not found!');
  //   } else {
  //     return restaurant;
  //   }
  // }

  find(id: number){
    return this.http.get<any>('http://localhost:3000/posts/' + id);
  }
}

