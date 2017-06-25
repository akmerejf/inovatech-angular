/*
  Custom validators to use everywhere.
*/
import { FormControl, FormGroup} from '@angular/forms';

// SINGLE FIELD VALIDATORS
export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}


// FORM GROUP VALIDATORS
export function matchingFields(fieldKey: string, confirmFieldKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let field = group.controls[fieldKey];
    let confirmField = group.controls[confirmFieldKey];
    
    if (field.value !== confirmField.value) {
      return {
        mismatchedFields: true
      };
    }
  }
}