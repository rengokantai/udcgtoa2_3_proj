import {Component,EventEmitter} from 'angular2/core';

@Component({
    selector:'cf',
    template:`
    <h1>submitted.</h1>
    <span class="highlight">{{self.name}}</span>
    <span class="highlight">{{self.age}}</span>
    <label for="name">name</label>
    <input type="text" id="name"  [(ngModel)]="self.name" (keyup)="onKeyUp()">
    <label for="age">age</label>
    <input type="text" id="age"  [(ngModel)]="self.age" (keyup)="onKeyUp()">
    filled?{{filled?'yes':'no'}}
    valid?{{valid?'yes':'no'}}
    <button [disabled]="!valid" (click)="onCf()">submit</button>
    `,
    inputs:['self'],
    outputs:['cfed']
})


export class CfComponent{
    self={name:'',age:''};
    filled = false;
    valid= false;
    cfed=new EventEmitter<{name:string,age:string}>()
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

    onCf(){
        this.cfed.emit(this.self);
    }
}

