import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const style1 = style({
  opacity: 1,
});

const style2 = style({
  opacity: 0,
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('850ms ease-in')),
    ]),
  ],
})
export class AppComponent {
  title = 'personal-app';
  themeSelection: boolean = false;
  @ViewChild('navi') navi: ElementRef | undefined;
  @ViewChild('carousel-container') business: ElementRef | undefined;
  @ViewChild('projectDiv') projectDiv: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  items: MenuItem[] = [
    {
      label: 'Acerca de mí', icon: 'pi pi-fw pi-id-card',
      command: () => {
        this.scroll(this.navi?.nativeElement);
      }
    },
    {
      label: 'Tu negocio en internet', icon: 'pi pi-fw pi-globe',
      command: () => {
        this.scroll(this.business?.nativeElement);
      }
    },
    {
      label: 'Proyectos', icon: 'pi pi-fw pi-images',
      command: () => {
        this.scroll(this.projectDiv?.nativeElement);
      }
    },
    {
      label: 'Contacto', icon: 'pi pi-fw pi-envelope',
      command: () => {
        this.scroll(this.contact?.nativeElement);
      }
    },
  ];
  knowledges: any[] = [
    {
      name: "Angular",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
    },
    {
      name: "TypeScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
    },
    {
      name: "Spring Boot",
      img: "https://www.armadilloamarillo.com/wp-content/uploads/course-image.png"
    }, {
      name: "Java",
      img: "https://cdn-icons-png.flaticon.com/512/226/226777.png"
    },
    {
      name: "Power BI",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png"
    },
    {
      name: "Docker",
      img: "https://gogeticon.net/files/3163573/d130ef65a8efdfa66fa49eb5ab745cef.png"
    },
    {
      name: "Git",
      img: "https://firebasestorage.googleapis.com/v0/b/miblog-d37b8.appspot.com/o/personal%2Fgit.png?alt=media&token=889702a0-a45e-4213-b7d8-3005e546fd47"
    },
    {
      name: "PostgreSQL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
    }
  ]

  images = [
    {
      alt: '',
      img: '../assets/one.png'
    },
    {
      alt: '',
      img: '../assets/five.png'
    },
    {
      alt: '',
      img: '../assets/two.png'
    }
  ]

  events = [
    {
      title: 'MEGA SANTAMARIA S.A.',
      description: 'Aplicaciones informáticas departamento TI',
      icon: PrimeIcons.DESKTOP,
      color: '#0041a8'
    },
    {
      title: 'BK del Ecuador',
      description: 'Desarrollador frontend en Angular',
      icon: PrimeIcons.DESKTOP,
      color: '#0041a8'
    },
    {
      title: 'Independiente',
      description: 'Desarrollador web y móvil',
      icon: PrimeIcons.DESKTOP,
      color: '#0041a8'
    },
    {
      title: 'JA Servicios',
      description: 'Desarrollador frontend Angular',
      icon: PrimeIcons.DESKTOP,
      color: '#107c73'
    },
  ]
  projects = [
    {
      link: 'https://play.google.com/store/apps/details?id=com.souldevec.transito',
      name: 'Infracciones de tránsito EC',
      technologies: 'ReactNative Expo TypeScript',
      description: 'Aplicación móvil de infracciones de tránsito establecidas en el Código Orgánico Integral Penal (C.O.I.P) de Ecuador que realizar la búsqueda de las mismas por número de artículo o palabras clave.',
      img: '../assets/infraec.png'
    },
    {
      link: 'https://turism-app-f8d5c.web.app/',
      name: 'Autenticación Spring Boot JWT',
      technologies: 'JWT SpringBoot PostgreSQL',
      description: 'Uno de mis proyectos más conocidos, una rest API desarrollada con Spring Boot que permite registrar y autenticar usuarios utilizando JWT.',
      img: '../assets/turism.png'
    },
    {
      link: 'https://www.youtube.com/channel/UCtypUtmtx6P8kImx_97pyDQ',
      technologies: 'YouTube',
      description: 'Uno de mis pasatiempos es crear videos y tutoriales de programación web, actualmente tengo un canal en YouTube para subir dicho contenido.',
      name: 'Canal de YouTube',
      img: '../assets/yt.png'
    },
  ]
  innerWidth = window.innerWidth < 600;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(elementID: string) {
    const componentPosition = document.getElementById(elementID)?.offsetTop;
    const scrollPosition = window.scrollY;
    if (scrollPosition >= componentPosition! - (window.innerWidth > 800 ? 550 : 850)) {
      return 'show';
    } else {
      return 'hide';
    }
  }

  openFile() {
    window.open("https://saulm12.github.io/about-me/assets/SaulMoncayo.pdf");
  }

}
