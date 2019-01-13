import { Component, OnInit } from '@angular/core';
import {MockyService} from "../mocky.service";

@Component({
  selector: 'mocky',
  templateUrl: './mocky.component.html',
  styleUrls: ['./mocky.component.scss']
})
export class MockyComponent implements OnInit {
  mockies: Array<any>;

  constructor(private mockyService: MockyService) { }

  ngOnInit() {
    this.mockyService.getAll().subscribe(data => {
      this.mockies = data;
    });
  }
}
