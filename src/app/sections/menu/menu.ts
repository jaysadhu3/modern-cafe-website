import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CafeConfigService } from '../../core/services/cafe-config.service';
import { CafeConfig } from '../../core/models/cafe-config.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  config$: Observable<CafeConfig>;

  constructor(private configService: CafeConfigService) {
    this.config$ = this.configService.getConfig();
  }

}
