import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-television',
  templateUrl: './television.page.html',
  styleUrls: ['./television.page.scss'],
})
export class TelevisionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public televisionShowsWatched = [
    { val: 'Breaking Bad ', isChecked: true },
    { val: 'One Piece', isChecked: true },
    { val: 'Band of Brothers', isChecked: true },
    { val: 'Narcos ', isChecked: false },
    { val: 'Silicon Valley', isChecked: true },
    { val: 'Mr. Robot', isChecked: false },
    { val: 'Rick and Morty', isChecked: true },
    { val: 'Firefly ', isChecked: true },
    { val: 'The Office ', isChecked: true },
    { val: 'Suits ', isChecked: false },
    { val: 'Seinfeld ', isChecked: true },
    { val: 'Futurama ', isChecked: true },
    { val: 'Dragon Ball Z ', isChecked: false },
    { val: 'Chernobyl', isChecked: false },
  ];

}
