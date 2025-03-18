import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'demo-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms 0ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LoginCardComponent implements OnInit {
  showSuccessTemplate: boolean = false;
  loadingAuth: boolean = false;
  displayedText = '';
  currentPartIndex = 0;
  currentCharIndex = 0;
  textParts = [
    { content: 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', style: '#ff4287' },
    { content: '.', style: 'white' },
    {
      content: 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0',
      style: '#d63aff',
    },
    { content: '.', style: 'white' },
    {
      content: 'Gfx6VO9tcxwk6xqx9yYzSfebfeakZp5JYIgP_edcw_A',
      style: '#00b9f1',
    },
    // ... agregue más según sea necesario
  ];
  displayedTextSafe: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  resetText() {
    this.displayedText = '';
    this.currentPartIndex = 0;
    this.currentCharIndex = 0;
    this.textParts = [
      { content: 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', style: '#ff4287' },
      { content: '.', style: 'white' },
      {
        content: 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0',
        style: '#d63aff',
      },
      { content: '.', style: 'white' },
      {
        content: 'Gfx6VO9tcxwk6xqx9yYzSfebfeakZp5JYIgP_edcw_A',
        style: '#00b9f1',
      },
      // ... agregue más según sea necesario
    ];
    this.displayedTextSafe = '';
  }

  typeText() {
    setTimeout(() => {
      this.displayedText += `<span style="color: ${
        this.textParts[this.currentPartIndex].style
      }" class="${this.textParts[this.currentPartIndex].style}">${
        this.textParts[this.currentPartIndex].content[this.currentCharIndex]
      }</span>`;
      this.displayedTextSafe = this.sanitizer.bypassSecurityTrustHtml(
        this.displayedText
      );
      this.currentCharIndex++;

      if (
        this.currentCharIndex >=
        this.textParts[this.currentPartIndex].content.length
      ) {
        this.currentCharIndex = 0;
        this.currentPartIndex++;

        if (this.currentPartIndex >= this.textParts.length) {
          return; // Termina la animación cuando se ha escrito todo el texto
        }
      }

      this.typeText();
    }, 28);
  }

  showSuccess() {
    this.resetText();
    this.showSuccessTemplate = true;
    this.loadingAuth = true;
    setTimeout(() => {
      this.loadingAuth = false;
      this.typeText();
    }, 1500);
    setTimeout(() => {
      this.showSuccessTemplate = false;
    }, 15000);
  }
}
