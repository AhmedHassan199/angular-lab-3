import { Component, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name = "";
  age = "";
  students:{name:string, age:string}[] = []
  @Output() myEvent = new EventEmitter();
  Add(){
    if(+this.age >= 15){
      let student = {name:this.name, age:this.age};
      // console.log(student);
      this.students.push(student);
      let  DataLogin =  this.students;
      this.myEvent.emit(DataLogin);

    }
  }
}
