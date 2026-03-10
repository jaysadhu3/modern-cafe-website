import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CafeConfig } from '../../core/models/cafe-config.model';
import { CafeConfigService } from '../../core/services/cafe-config.service';
@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  config$: Observable<CafeConfig>;

  constructor(private configService: CafeConfigService) {
    this.config$ = this.configService.getConfig();
  }

}
