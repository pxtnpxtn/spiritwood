import { Component, AfterViewInit, HostBinding } from '@angular/core';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime,
  tap
} from 'rxjs/operators';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { fromEvent } from 'rxjs';
import { VisibilityState } from './header.models'
// Translator
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ background: 'transparent', color: 'white' })
      ),
      state(
        VisibilityState.Visible,
        style({ background: 'white', color: 'green' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements AfterViewInit {

  private isVisible = false;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset > 0 ? VisibilityState.Visible : VisibilityState.Hidden),
      distinctUntilChanged(),
      share(),
      tap((v) => console.log('scroll', v))
    );

    // Can this be done better?
    scroll$.subscribe((visibility: VisibilityState) => visibility === 'visible' ? this.isVisible = true : this.isVisible = false)
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnDestroy(): void {
    console.log('Header shouldn`t be destroyed');
  }

}
