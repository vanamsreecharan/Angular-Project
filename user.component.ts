import {Component,Input, Output,EventEmitter,output} from '@angular/core';
import {User} from './user.model';
import { CardComponent } from "./shared/card/card.component";
//import { DUMMY_USERS } from './dummy-users'

//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
    selector:'app-user',
    standalone:true,
    imports: [CardComponent],
    templateUrl:'./user.component.html',
    styleUrl:'./user.component.css',


})
export class UserComponent{
  onselectclick(){
    //   const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
     //  this.selectedUser.set(DUMMY_USERS[randomIndex]);
     this.select.emit(this.user.id);
        }
@Input({required:true}) user!:User;
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter<string>();
//select= output<string>();

get imagepath(){
  return 'assets/users/'+this.user.avatar;
  ;
}
/*avatar=input.required<string>();//By using signal Input
name=input.required<string>();//Alternative way instead of using input decorator
imagepath  = computed(()=> {
  return  'assets/users/' + this.avatar();
});*/





    //selectedUser=signal(DUMMY_USERS[randomIndex]);
  //  imagepath=computed(()=> 'assets/users/' + this.selectedUser().avatar)
    //get imagepath(){
     //   return 'assets/users/'+this.selectedUser.avatar
    //}
   

}