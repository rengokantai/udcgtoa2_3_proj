/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component,EventEmitter} from 'angular2/core';

@Component({
    selector:'bind',
    template:`
    enter detail
    <label for="name">name</label>
    <input type="text" id="name"  [(ngModel)]="self.name" (keyup)="onKeyUp()">
    <label for="age">age</label>
    <input type="text" id="age"  [(ngModel)]="self.age" (keyup)="onKeyUp()">
    filled?{{filled?'yes':'no'}}
    valid?{{valid?'yes':'no'}}
    <button [disabled]="!valid" (click)="onSubmit()">submit</button>
    `,
    inputs:['self'],
    outputs:['submitted']
})

export class BindComponent{
    self={name:'',age:''};
    filled = false;
    valid= false;

    submitted = new EventEmitter<{name:string,age:string}>();

    onKeyUp(){
        if (this.self.name!=''&&this.self.age!=''){
            this.filled= true;
        }else{
            this.filled = false;
        }

        if (this.self.name!=''&&/^\d+/.test(this.self.age)){
            this.valid= true;
        }else{
            this.valid = false;
        }
    }

    onSubmit(){
        this.submitted.emit(this.self);
    }
}