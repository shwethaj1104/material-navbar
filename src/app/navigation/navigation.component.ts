import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
//
import { CustomLink } from './custom-link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  background = 'primary';
  links: CustomLink[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    let route: Route;
    for (route of this.router.config) {
      if (route.data && route.data.label) {
        const link: CustomLink = {
          path: `/${route.path}`,
          label: route.data.label,
        };
        this.links.push(link);
      }
    }
  }
}
