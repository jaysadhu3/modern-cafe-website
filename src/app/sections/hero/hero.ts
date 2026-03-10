import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CafeConfigService } from '../../core/services/cafe-config.service';
import { CafeConfig } from '../../core/models/cafe-config.model';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  config$: Observable<CafeConfig>;

  constructor(private configService: CafeConfigService) {
    this.config$ = this.configService.getConfig();
  }
}
