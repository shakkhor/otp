import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Formservice } from '../services/formservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})


export class SmsComponent implements OnInit {
  @ViewChild('myId',{static: false}) myId: ElementRef;
  providerList = [];
  
  constructor(private service: Formservice, private router: Router, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.providerList = this.service.providerList;
  }

  openSnackBar() {
    this._snackBar.open("Successfully sent",  'close', {
      duration: 2000,
    });
  }




  selectedChips: any[] = [];
  submit(f) {
    let newVal = {mobileNo:f.value.mobileNo, messageCount:f.value.messageCount, selectedChips:this.selectedChips};
    this.service.postForm(newVal);
    // this.selectedChips = [];
    // console.log(this.myId.nativeElement.childNodes[0].childNodes[0].childNodes[1])
    var kuku = document.getElementsByClassName("mat-chip-selected");
    console.log(kuku)
    // console.log(f.form-control)
    // this.router.navigateByUrl('/send-sms');
   
  }

  fun(x) {
    console.log(x);
  }

  changeSelected(parameter: string, query: string) {

    let index = this.selectedChips.indexOf(query);
    if (index >= 0) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(query);
    }

    // console.log("this.selectedChips " + this.selectedChips);
  }

}
