import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CafeConfigService } from '../../core/services/cafe-config.service';
import { CafeConfig } from '../../core/models/cafe-config.model';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  config$: Observable<CafeConfig>;

  constructor(
    private configService: CafeConfigService,
    private sanitizer: DomSanitizer
  ) {
    this.config$ = this.configService.getConfig();
  }

  getSafeMapUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
