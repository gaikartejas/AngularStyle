import {Component, OnInit} from '@angular/core'

@Component({
selector:'parent',
templateUrl:'parentcomponent.html'


})
export class Parent_compo implements OnInit
{

    style1={'color':'red','background-color':'cyan','margin-left':'30%','width':'30%','margin-top':'10%'};
    
    username:String=null;

    password:String=null; 
   
    OnClick()
    {
      this.style1["background-color"]='grey';
      this.style1.color='black'

    }
    constructor(){}
    ngOnInit(){}
    


}