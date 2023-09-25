import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() isClassAdded: boolean = true;
  @Output() toggleClassEvent = new EventEmitter<void>();

  toggleClass() {
    this.toggleClassEvent.emit();
  }
}
