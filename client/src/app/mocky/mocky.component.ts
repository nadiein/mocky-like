import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MockyService} from '../services/mocky.service';

@Component({
  selector: 'mocky',
  templateUrl: './mocky.component.html',
  styleUrls: ['./mocky.component.scss']
})
export class MockyComponent implements OnInit {

  constructor(
    private mockyService:MockyService
  ) {}

  mocky:Array<any>;

  ngOnInit() {
    this.loadDicts();
  }

    loadDicts() {
      this.mockyService.getAll().subscribe(data => {
        this.mocky = data;
      });
    }

  onSaveMockyEvent(form: NgForm) {
    console.log(form);
    this.mockyService.postMocky(form).subscribe(result => {
    }, error => console.error(error));
  }

  onDeleteMockyEvent(item) {
    console.log(item);
    this.mockyService.deleteMocky(item).subscribe(result => {
      console.log(item);
    }, error => console.error(error));
    this.mocky.splice(this.mocky.indexOf(item.id), 1)
  }

}
