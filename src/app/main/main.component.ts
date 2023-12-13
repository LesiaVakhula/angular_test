import { Component, OnInit } from '@angular/core';
import { CalculateHelperService } from '../services/calculate-helper.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public result: number = 0;
  constructor(private calculateHelperService: CalculateHelperService) {}

  public ngOnInit(): void {
    this.result = this.calculateHelperService.randomValue;
  }
}
