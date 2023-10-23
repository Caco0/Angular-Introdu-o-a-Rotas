import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // http://localhost:4200/portifolio/1
  constructor(private activeRout: ActivatedRoute, private navegador: Router) {
    this.activeRout.params.subscribe((res) => console.log(res));

    // http://localhost:4200/portifolio/1?{name=rafaeltoken=123}
    this.activeRout.queryParams.subscribe((res) => console.log(res));
  }
  ngOnInit(): void {
    this.navegador.navigate(['/']);
    setInterval(() => {}, 5000);
  }
}
