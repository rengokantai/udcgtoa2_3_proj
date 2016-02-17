System.register(['angular2/core', './bd/bd.component', './bd/cf.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bd_component_1, cf_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bd_component_1_1) {
                bd_component_1 = bd_component_1_1;
            },
            function (cf_component_1_1) {
                cf_component_1 = cf_component_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                    this.self = { name: '', age: '' };
                    this.cfself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (self) {
                    this.self = self;
                };
                AppComponent.prototype.onCf = function (self) {
                    this.cfself = self;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div class=\"container\">\n    <bind (submitted)=\"onSubmit($event)\" [self]=\"cfself\">\n    </bind></div>\n    <div class=\"container\">\n        <cf (cfed)=\"onCf($event)\" [self]=\"self\"></cf>\n    </div>\n    ",
                        directives: [bd_component_1.BindComponent, cf_component_1.CfComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uU3VibWl0IiwiQXBwQ29tcG9uZW50Lm9uQ2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBLGtHQUFrRztZQUNsRztnQkFBQUE7b0JBYUlDLFNBQUlBLEdBQUNBLEVBQUNBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLEdBQUdBLEVBQUNBLEVBQUVBLEVBQUNBLENBQUNBO29CQUN0QkEsV0FBTUEsR0FBQ0EsRUFBQ0EsSUFBSUEsRUFBQ0EsRUFBRUEsRUFBQ0EsR0FBR0EsRUFBQ0EsRUFBRUEsRUFBQ0EsQ0FBQ0E7Z0JBUTVCQSxDQUFDQTtnQkFOR0QsK0JBQVFBLEdBQVJBLFVBQVNBLElBQTZCQTtvQkFDbENFLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNyQkEsQ0FBQ0E7Z0JBQ0RGLDJCQUFJQSxHQUFKQSxVQUFLQSxJQUE2QkE7b0JBQzlCRyxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDdkJBLENBQUNBO2dCQXJCTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFDQSwrTkFPUkE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLDRCQUFhQSxFQUFDQSwwQkFBV0EsQ0FBQ0E7cUJBQ3pDQSxDQUFDQTs7aUNBV0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0F0QkEsQUFzQkNBLElBQUE7WUF0QkQsdUNBc0JDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0e0JpbmRDb21wb25lbnR9ZnJvbSAnLi9iZC9iZC5jb21wb25lbnQnO1xyXG5pbXBvcnR7Q2ZDb21wb25lbnR9IGZyb20nLi9iZC9jZi5jb21wb25lbnQnO1xyXG4vL3Bhc3MgW215bmFtZV0gZnJvbSBwYXJlbnQgY29tcG9uZW50IHRvIGNoaWxkIGNvbXBvbmVudC5jaGlsZCBjb21wb25lbnQgcmVjZWl2ZSBkYXRhIGZyb20gW2lucHV0XVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxiaW5kIChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFtzZWxmXT1cImNmc2VsZlwiPlxyXG4gICAgPC9iaW5kPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxjZiAoY2ZlZCk9XCJvbkNmKCRldmVudClcIiBbc2VsZl09XCJzZWxmXCI+PC9jZj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0JpbmRDb21wb25lbnQsQ2ZDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgc2VsZj17bmFtZTonJyxhZ2U6Jyd9O1xyXG4gICAgY2ZzZWxmPXtuYW1lOicnLGFnZTonJ307XHJcblxyXG4gICAgb25TdWJtaXQoc2VsZjp7bmFtZTpzdHJpbmcsYWdlOnN0cmluZ30pe1xyXG4gICAgICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB9XHJcbiAgICBvbkNmKHNlbGY6e25hbWU6c3RyaW5nLGFnZTpzdHJpbmd9KXtcclxuICAgICAgICB0aGlzLmNmc2VsZiA9IHNlbGY7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
