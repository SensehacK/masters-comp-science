import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute) { }
  queryParamRes: Params;
  convertQueryParam: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    // TODO:
    /*
    // Tried sending queryparams but doesnt work like intended with conversion issues.
    this.route.queryParams.subscribe(res => {
      this.queryParamRes = res;
      console.log(res);
    });

    */


    // this.convertQueryParam = (this.queryParamRes);
    // console.log('Value of type convertQueryParam', this.convertQueryParam);
    // console.log(typeof (this.convertQueryParam));
  }

}
