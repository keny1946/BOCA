import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faHome, faTrashRestore, faTasks, faUser, faExclamationCircle, faGlobeEurope, faQuestion,
  faAddressCard, faWaveSquare, faChartLine, faClipboardList, faShoppingBag, faFilter, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faTrashRestore = faTrashRestore;
  faTasks = faTasks;
  faUser = faUser;
  faExclamationCircle = faExclamationCircle;
  faGlobeEurope = faGlobeEurope;
  faQuestion = faQuestion;
  faAddressCard = faAddressCard;
  faWaveSquare = faWaveSquare;
  faChartLine = faChartLine;
  faClipboardList = faClipboardList;
  faShoppingBag = faShoppingBag;
  faFilter = faFilter;
  faSignOutAlt = faSignOutAlt;

  img = 'src/assets/images/logo.png';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
