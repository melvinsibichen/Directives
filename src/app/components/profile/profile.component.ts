import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    // Interpolation binding
    Profile = {
      name: 'Melvin Sibichen',
      age: 25,
      email: 'sibichenmelvin@gmail.com',   
    };
  
  //two way binding ngmodel
    Address: string = '';
  
}
