import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-app';
  themeSelection: boolean = false;
  @ViewChild('first') first: ElementRef | undefined;
  @ViewChild('pr') pr: ElementRef | undefined;
  @ViewChild('ct') ct: ElementRef | undefined;
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
      label: 'Conocimientos', icon: 'pi pi-fw pi-book',
      command: () => {
        this.scroll(this.first?.nativeElement);
      }
    },
    {
      label: 'Proyectos', icon: 'pi pi-fw pi-images',
      command: () => {
        this.scroll(this.pr?.nativeElement);
      }
    },
    {
      label: 'Contacto', icon: 'pi pi-fw pi-envelope',
      command: () => {
        this.scroll(this.ct?.nativeElement);
      }
    }
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
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    }
  ]
  events = [
    {
      title: 'MEGA SANTAMARIA S.A.',
      description: 'Aplicaciones informáticas departamento TI',
      icon: PrimeIcons.DESKTOP,
      color: '#3B82F6'
    },
    {
      title: 'BK del Ecuador',
      description: 'Desarrollador frontend en Angular',
      icon: PrimeIcons.DESKTOP,
      color: '#3B82F6'
    },
    {
      title: 'Independiente',
      description: 'Desarrollador web y móvil',
      icon: PrimeIcons.DESKTOP,
      color: '#3B82F6'
    },
  ]
  proyects = [
    {
      link: 'https://turism-app-f8d5c.web.app/',
      name: 'Reservas a sitios turísticos',
      description: 'Angular, Spring Boot y PostgreSQL',
      img: 'https://firebasestorage.googleapis.com/v0/b/miblog-d37b8.appspot.com/o/personal%2Fturism.png?alt=media&token=8ee2fa10-22d7-4b64-a55d-89adb036cc20'
    },
    {
      link: 'https://dev-store-demo.web.app/',
      name: 'Carrito de compras básico',
      description: 'React, Spring Boot y PostgreSQL',
      img: 'https://firebasestorage.googleapis.com/v0/b/miblog-d37b8.appspot.com/o/personal%2Fshop.png?alt=media&token=d45efdf7-2581-42a0-8fcc-625817573532'
    },
    {
      link: 'https://www.youtube.com/channel/UCtypUtmtx6P8kImx_97pyDQ',
      description: 'Tutoriales de programación web',
      name: 'Canal de YouTube',
      img: 'https://firebasestorage.googleapis.com/v0/b/miblog-d37b8.appspot.com/o/personal%2Fyoutube.png?alt=media&token=01d553ec-3af7-4bfe-b54f-882560c0fb89'
    },
    {
      link: 'https://play.google.com/store/apps/details?id=com.SmDev.UDLAparking',
      name: 'Aplicación de Parking',
      description: 'React Native con Firebase',
      img: 'https://firebasestorage.googleapis.com/v0/b/miblog-d37b8.appspot.com/o/personal%2Fapk.png?alt=media&token=c97cb1d8-a864-40d4-9243-b6de9f9cbecd'
    },
  ]
  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.localStorage.getItem("theme")
    if (theme) {
      this.themeSelection = theme == 'dark' ? true : false
      this.changeTheme(this.themeSelection)
    }
  }
  changeTheme(state: boolean) {
    let theme = state ? 'dark' : 'light'
    window.localStorage.setItem("theme", theme)
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement
    themeLink.href = 'lara-' + theme + '-blue' + '.css'
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
