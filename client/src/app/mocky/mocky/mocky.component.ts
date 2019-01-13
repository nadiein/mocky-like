import { Component, OnInit, OnDestroy } from '@angular/core';
import {MockyService} from "../mocky.service";
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'mocky',
  templateUrl: './mocky.component.html',
  styleUrls: ['./mocky.component.scss']
})
export class MockyComponent implements OnInit, OnDestroy  {
  mockies: Array<any>;
  mocky: any = {};
  sub: Subscription;

  constructor(
              private mockyService: MockyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.mockyService.getAll().subscribe(data => {
      this.mockies = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(form: NgForm) {
    this.mockyService.save(form).subscribe(result => {
      this.gotoMocky();
    }, error => console.error(error));
  }

  gotoMocky() {
    this.router.navigate(['/mocky']);
  }
}
