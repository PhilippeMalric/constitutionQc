import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'anms-no-id',
  templateUrl: './no-id.component.html',
  styleUrls: ['./no-id.component.css']
})
export class NoIdComponent implements OnInit {
  navItem = [
    { link: 'maison', label: 'Maison', auth: false },
    { link: 'statut-reglement', label: 'Statuts et règlements', auth: false },
    { link: 'manifeste', label: 'Manifeste', auth: false }
  ];

  @ViewChild('mySelect', { static: true }) mySelect: ElementRef;

  constructor() {}

  ngOnInit() {}
}
