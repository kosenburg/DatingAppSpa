import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate} from '@angular/router';
import {MemberEditComponent} from '../members/member-edit/member-edit.component';
import {Observable} from 'rxjs';


@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent): boolean {
    if (component.editForm) {
      return confirm('Are you sure you want to continue? Any unsaved changes will be lost!');
    }
    return true;
  }
}
