import {Component} from 'angular2/core';
import{BindComponent}from './bd/bd.component';
import{CfComponent} from'./bd/cf.component';
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
    <div class="container">
    <bind (submitted)="onSubmit($event)" [self]="cfself">
    </bind></div>
    <div class="container">
        <cf (cfed)="onCf($event)" [self]="self"></cf>
    </div>
    `,
    directives:[BindComponent,CfComponent]
})
export class AppComponent {
    self={name:'',age:''};
    cfself={name:'',age:''};

    onSubmit(self:{name:string,age:string}){
        this.self = self;
    }
    onCf(self:{name:string,age:string}){
        this.cfself = self;
    }
}