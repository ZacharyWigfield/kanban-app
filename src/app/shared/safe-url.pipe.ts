import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url) {
   const newUrl = url.substring(1, url.length-1);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(newUrl);
  }
}
