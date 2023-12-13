import { Component, OnInit } from '@angular/core';
import { CalculateHelperService } from '../services/calculate-helper.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  public result: number = 0;
  constructor(private calculateHelperService: CalculateHelperService) {}

  public ngOnInit(): void {
    this.result = this.calculateHelperService.randomValue;
  }
}
