import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
} from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { events } from '../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const style1 = style({
  opacity: 1,
});

const style2 = style({
  opacity: 0,
});
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('850ms ease-in')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  title = 'personal-app';
  themeSelection: boolean = false;
  @ViewChild('navi') navi: ElementRef | undefined;
  @ViewChild('carousel-container') business: ElementRef | undefined;
  @ViewChild('projectDiv') projectDiv: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;
  @ViewChild('appsImg', { static: true }) appsImg!: ElementRef<HTMLDivElement>;
  @ViewChild('parallaxText', { static: true }) parallaxText!: ElementRef<HTMLDivElement>;
  @ViewChild('parallaxContainer', { static: true }) parallaxContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('projectImg', { static: true }) projectImg!: ElementRef<HTMLDivElement>;
  @ViewChild('loginCardContainer', { static: true }) loginCardContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('loginCard', { static: true }) loginCard!: ElementRef<HTMLDivElement>;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  items: MenuItem[] = [
    {
      label: 'Acerca de mí',
      icon: 'pi pi-fw pi-id-card',
      command: () => {
        this.scroll(this.navi?.nativeElement);
      },
    },
    {
      label: 'Proyectos',
      icon: 'pi pi-fw pi-images',
      command: () => {
        this.scroll(this.projectDiv?.nativeElement);
      },
    },
    {
      label: 'Contacto',
      icon: 'pi pi-fw pi-envelope',
      command: () => {
        this.scroll(this.contact?.nativeElement);
      },
    },
  ];
  eventList = events;

  innerWidth = window.innerWidth < 600;
  private fragment: string = '';
  constructor(
    private cdRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment!;
    });
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
    try {
      document.querySelector('#' + this.fragment)!.scrollIntoView();
    } catch (e) {}
    this.initScrollAnimations();
  }

  initScrollAnimations() {
    gsap.to(this.appsImg.nativeElement, {
      scrollTrigger: {
        trigger: this.appsImg.nativeElement,
        scrub: true,
        start: '-50% bottom',
        end: 'center center'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 0.4,
      scale: 1.2,
      opacity:1
    });
    gsap.to(this.parallaxText.nativeElement, {
      scrollTrigger: {
        trigger: this.parallaxContainer.nativeElement,
        start: '-50% bottom',
        end: 'center center',
      scrub: true
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y: 0,
      scale: 1.1,
    });
    gsap.to(this.projectImg.nativeElement, {
      scrollTrigger: {
        trigger: this.projectImg.nativeElement,
        scrub: true,
        start: '-50% bottom',
        end: 'center center'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 0.4,
      opacity:1,
     scale:1
    });

    gsap.to(this.loginCardContainer.nativeElement, {
      scrollTrigger: {
        trigger: this.loginCardContainer.nativeElement,
        start: '60% bottom',
      scrub: true,
      end: 'center center'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      backgroundColor:'#030A14',
      duration: 0.8,
    });
  }

  getSafeSVG(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(elementID: string) {
    const componentPosition = document.getElementById(elementID)?.offsetTop;
    const scrollPosition = window.scrollY;
    if (
      scrollPosition >=
      componentPosition! - (window.innerWidth > 800 ? 550 : 850)
    ) {
      return 'show';
    } else {
      return 'hide';
    }
  }

  openFile() {
    window.open('https://saulm12.github.io/about-me/assets/SaulMoncayo.pdf');
  }
}
