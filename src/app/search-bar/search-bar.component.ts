import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AllGetMethodsService } from 'src/all-get-methods.service';
import { PassDataToComponentService } from 'src/pass-data-to-component.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public search: any = '';
  isSearchResultHidden = false;
  queryField: FormControl = new FormControl();
  private profileToGo = [];
  allProfilesForSearch : Array<any>;
  displaySearchList = "d-none";
  
  constructor(private router: Router, 
    private _allGetMethods: AllGetMethodsService,
    private _passDataToComponent: PassDataToComponentService) { }

  ngOnInit() {
    this._allGetMethods.getAllProfileForSearch().subscribe( 
      data => this.allProfilesForSearch = data
    );
  }
  
  searchOnChange(){
    this.displaySearchList = "d-block";
    this.allProfilesForSearch;
  }
 
  goToProfile(Profile_Key){
    this.profileToGo.pop();
    this.profileToGo.push(Profile_Key);
    this._passDataToComponent.profileToGoMethod(this.profileToGo);
    // window.location.reload();
    this.router.navigateByUrl("", { skipLocationChange: true }).then(() =>
    this.router.navigate(["Profile/" + Profile_Key]));
    // this.router.navigate(["Profile/" + Profile_Key]);
  }
}
