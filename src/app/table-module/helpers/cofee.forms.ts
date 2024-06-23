import { AbstractControl } from '@angular/forms';

export function LetterValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    if (!control.value) return null;
  
    const reg = new RegExp('^[a-zA-Z]+(\\s[a-zA-Z]+)*$');
    return reg.test(control.value) ? null : { invalidSymbols: true };
  }
  
  export function DescriptionValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    if (!control.value) return null;
  
    const reg = new RegExp('^.{10,}$');
    return reg.test(control.value) ? null : { invalidSymbols: true };
  }