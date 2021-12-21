import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  includeLetter = false;
  includeNumber = false;
  includeSymbol = false;
  length=0;
  passwordd='';

  onChangeLetter() {
    this.includeLetter = !this.includeLetter;
  }
  onChnageNumber() {
    this.includeNumber = !this.includeNumber;
  }
  onChangeSymbol() {
    this.includeSymbol = !this.includeSymbol;
  }


  onChangeLength(event:any){
    const parsedValue=parseInt(event.target.value);
    console.log(`Parsed Value is `,parsedValue);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
      console.log('Length is',this.length)
    }

  }

  onClickOfButton() {
    console.log(`Letter ${this.includeLetter} Number ${this.includeNumber} Symbol ${this.includeSymbol}`);
 //   this.password = 'Admin@123';

    const numbers="1234567890";
    const letter="qwertyuiopasdfghjklzxcvbnm";
    const symbol="!@#$%^*()_+";
    let validChars=" ";

    if(this.includeLetter){
      validChars+=letter;
      console.log('valid chars',validChars);
    }
    if(this.includeNumber){
      validChars+=numbers;
    }
    if(this.includeSymbol){
      validChars+=symbol; 
    }
    console.log('valid chars final',validChars);

      let generatedPass="";

      for(let i=0;i<this.length;i++){
        const index=Math.floor(Math.random()*validChars.length);
        generatedPass+=validChars[index];
      }
      
      this.passwordd=generatedPass;





  }

  /*   getPassword(){

       return this.password;
     }
     getData(){
       return `Hi Divisht Here`
     }*/
}
