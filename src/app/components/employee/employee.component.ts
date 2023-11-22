import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {


  employee = {
    "people": [

      {
        "name": "John Smith",
        "age": 30,
        "gender": "Male",
        "location": "New York",
        "email": "john.smith@example.com",
        "state": "NY",
        "phone": "+1 (555) 123-4567"
      },
      {
        "name": "Emily Johnson",
        "age": 25,
        "gender": "Female",
        "location": "Los Angeles",
        "email": "emily.j@example.com",
        "state": "CA",
        "phone": "+1 (555) 234-5678"
      },
      {
        "name": "Daniel Brown",
        "age": 35,
        "gender": "Male",
        "location": "Chicago",
        "email": "daniel.b@example.com",
        "state": "IL",
        "phone": "+1 (555) 345-6789"
      },
      {
        "name": "Sophia Miller",
        "age": 28,
        "gender": "Female",
        "location": "Houston",
        "email": "sophia.m@example.com",
        "state": "TX",
        "phone": "+1 (555) 456-7890"
      },
      {
        "name": "William Davis",
        "age": 42,
        "gender": "Male",
        "location": "Miami",
        "email": "william.d@example.com",
        "state": "FL",
        "phone": "+1 (555) 567-8901"
      },     
      {
        "name": "Olivia Wilson",
        "age": 29,
        "gender": "Female",
        "location": "Seattle",
        "email": "olivia.w@example.com",
        "state": "WA",
        "phone": "+1 (555) 876-5432"
      },
      {
        "name": "Michael Johnson",
        "age": 34,
        "gender": "Male",
        "location": "San Francisco",
        "email": "michael.j@example.com",
        "state": "CA",
        "phone": "+1 (555) 987-6543"
      },
      {
        "name": "Ava Garcia",
        "age": 27,
        "gender": "Female",
        "location": "Miami",
        "email": "ava.g@example.com",
        "state": "FL",
        "phone": "+1 (555) 876-5432"
      },
      {
        "name": "Benjamin Martinez",
        "age": 40,
        "gender": "Male",
        "location": "Dallas",
        "email": "benjamin.m@example.com",
        "state": "TX",
        "phone": "+1 (555) 765-4321"
      },
      {
        "name": "Emma Turner",
        "age": 31,
        "gender": "Female",
        "location": "Seattle",
        "email": "emma.t@example.com",
        "state": "WA",
        "phone": "+1 (555) 654-3210"
      },
      {
        "name": "Nicholas Clark",
        "age": 38,
        "gender": "Male",
        "location": "Denver",
        "email": "nicholas.c@example.com",
        "state": "CO",
        "phone": "+1 (555) 543-2109"
      },
      {
        "name": "Chloe Adams",
        "age": 26,
        "gender": "Female",
        "location": "Chicago",
        "email": "chloe.a@example.com",
        "state": "IL",
        "phone": "+1 (555) 432-1098"
      }
     
    ]
  };

  // initially showvalue setting as false not displaying table
  showTable = false; 

// changing the booleanvalue onclick using tooglefnctn
  toggleTable() {
    this.showTable = !this.showTable;
  }

  applyStyles = false;
  changeStyles = false;
  toggleTableStyles() {
    this.applyStyles = !this.applyStyles;
    this.changeStyles = true; // Set changeStyles to true when styles are changed
  }
}
