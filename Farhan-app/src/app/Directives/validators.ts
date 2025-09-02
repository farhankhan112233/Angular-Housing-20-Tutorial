import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numValidators]',
})
export class OnlyDigitsDirective {
  private allowedKeys: string[] = [
    'Backspace',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'Delete',
    'Home',
    'End',
  ];

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.allowedKeys.includes(event.key)) {
      return;
    }
    if (/^[0-9]$/.test(event.key)) {
      return;
    }
    if (event.code.startsWith('Numpad') && /^[0-9]$/.test(event.key)) {
      return;
    }
    event.preventDefault();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pasted = event.clipboardData?.getData('text') ?? '';
    if (!/^\d+$/.test(pasted)) {
      event.preventDefault();
    }
  }
}
