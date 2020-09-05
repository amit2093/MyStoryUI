import { Component, OnInit } from '@angular/core';
import { AllGetMethodsService } from 'src/all-get-methods.service';

@Component({
  selector: 'app-messagae',
  templateUrl: './messagae.component.html',
  styleUrls: ['./messagae.component.css']
})
export class MessagaeComponent implements OnInit {

  time = new Date();

  allChats : Array<any> = [{"Profile_Key":2,"Profile_Name":"Kratika Chourasiya"},
                           {"Profile_Key":3,"Profile_Name":"Manoj Soni"},
                           {"Profile_Key":4,"Profile_Name":"Niket Pandey"},
                           {"Profile_Key":5,"Profile_Name":"Chandrajeet Singh"},
                           {"Profile_Key":6,"Profile_Name":"Sajal Soni"},
                           {"Profile_Key":7,"Profile_Name":"Swarup V."}];
                           
  chatingWith : string;
  constructor(private _allGetMethods: AllGetMethodsService) {
    this.chatingWith = this.allChats[0].Profile_Name;
    document.getElementById("main").style.marginLeft = "0px";
   }

 
  PersonMessageToSee_Key = 2;
  loggedInUserProfileKey = 1;
  privateMessageArray : Array<any> = [{"Message_Date":"2019-01-05T20:35:41.000+0000","Profile_Key":1,"Profile_Name":this.chatingWith,"Message_Body":"Hi Amit.. :)"},
                                      {"Message_Date":"2019-01-05T20:37:56.000+0000","Profile_Key":2,"Profile_Name":"Amit Saxena","Message_Body":"Hello :)"},
                                      {"Message_Date":"2019-01-05T20:37:56.000+0000","Profile_Key":1,"Profile_Name":this.chatingWith,"Message_Body":"Where are you?"},
                                      {"Message_Date":"2019-01-05T20:37:56.000+0000","Profile_Key":2,"Profile_Name":"Amit Saxena","Message_Body":"I am in Mumbai. Where are you?"},
                                      {"Message_Date":"2019-01-05T20:37:56.000+0000","Profile_Key":1,"Profile_Name":this.chatingWith,"Message_Body":"I am in Bangalore."},
                                      {"Message_Date":"2019-01-05T20:37:56.000+0000","Profile_Key":2,"Profile_Name":"Amit Saxena","Message_Body":"Okay..!"}];

  // messageGlance = ["Hi Amit, How are You", "Ok"];
  
  ngOnInit() {
    // this._allGetMethods.getAllChats().subscribe(                            
    //   data => {
    //     this.allChats = data;
    //     this.chatingWith = this.allChats[0].Profile_Name;

    //     this._allGetMethods.getMessagaeById(this.PersonMessageToSee_Key, 
    //               this.loggedInUserProfileKey).subscribe( 
    //               data => {this.privateMessageArray = data;}
    //     ); 
    //   }
    // ); 
  }

  getMessageContent(index){
   
    this.PersonMessageToSee_Key = this.allChats[index].Profile_Key;
    this.chatingWith = this.allChats[index].Profile_Name;
    // this._allGetMethods.getMessagaeById(this.PersonMessageToSee_Key, 
    //                                     this.loggedInUserProfileKey).subscribe( 
    //   data => {this.privateMessageArray = data;}
    // );  
  }
}
