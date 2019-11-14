import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-president',
  templateUrl: './president.component.html',
  styleUrls: ['./president.component.scss'],
})
export class PresidentComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() { }

}
