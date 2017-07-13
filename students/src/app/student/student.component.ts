import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private users:any;
  constructor(private db:DbService) {
    this.users=this.db.getData();
    console.log(this.users)
   }

  ngOnInit() {
  }

}
