import { Service } from './service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proxibanquev4-angular';
  isActive: boolean;

  constructor(private service: Service) {
  }

  ngOnInit() {
      this.service.check().subscribe((survey) => {
        this.isActive = survey != null;
      });
  }
}
