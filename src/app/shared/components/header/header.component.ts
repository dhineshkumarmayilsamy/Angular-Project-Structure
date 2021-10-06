import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private token: TokenService) { }

  ngOnInit(): void {

  }

  logout() {
    this.token.destroyToken();
    this.router.navigate(['/']);
  }

  private toggleClass: boolean = false;
  toggle() {
    this.toggleClass = !this.toggleClass;
    if (this.toggleClass)
      document.body.classList.add("sb-sidenav-toggled");
    else
      document.body.classList.remove("sb-sidenav-toggled");
  }

}