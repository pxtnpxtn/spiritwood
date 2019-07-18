import { Component, AfterViewInit, HostBinding } from '@angular/core';
import {
  distinctUntilChanged,
  map,
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
    ]),
    trigger('hamburger', [
      state('open', style({
        backgroundColor: 'red',
        height: '100vh'
      })),
      state('closed', style({
        backgroundColor: 'green',
        top: 0
      })),
      transition('open => closed', [
        animate('5s ease-in')
      ]),
      transition('closed => open', [
        animate('5s ease-in')
      ]),
    ]),
    // trigger('hamburger', [
    //   state(
    //     VisibilityState.Hidden,
    //     style({ background: 'transparent', color: 'white' })
    //   ),
    //   state(
    //     VisibilityState.Visible,
    //     style({ background: 'white', color: 'green' })
    //   ),
    //   transition('* => *', animate('200ms ease-in'))
    // ])
  ]
})
export class HeaderComponent implements AfterViewInit {

  public mobileMenu = false;
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

  mobileMenuToggle() {
    this.mobileMenu = !this.mobileMenu
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnDestroy(): void {
    console.log('Header shouldn`t be destroyed');
  }

}
