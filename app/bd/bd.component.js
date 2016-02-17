System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BindComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BindComponent = (function () {
                function BindComponent() {
                    this.self = { name: '', age: '' };
                    this.filled = false;
                    this.valid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                BindComponent.prototype.onKeyUp = function () {
                    if (this.self.name != '' && this.self.age != '') {
                        this.filled = true;
                    }
                    else {
                        this.filled = false;
                    }
                    if (this.self.name != '' && /^\d+/.test(this.self.age)) {
                        this.valid = true;
                    }
                    else {
                        this.valid = false;
                    }
                };
                BindComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.self);
                };
                BindComponent = __decorate([
                    core_1.Component({
                        selector: 'bind',
                        template: "\n    enter detail\n    <label for=\"name\">name</label>\n    <input type=\"text\" id=\"name\"  [(ngModel)]=\"self.name\" (keyup)=\"onKeyUp()\">\n    <label for=\"age\">age</label>\n    <input type=\"text\" id=\"age\"  [(ngModel)]=\"self.age\" (keyup)=\"onKeyUp()\">\n    filled?{{filled?'yes':'no'}}\n    valid?{{valid?'yes':'no'}}\n    <button [disabled]=\"!valid\" (click)=\"onSubmit()\">submit</button>\n    ",
                        inputs: ['self'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BindComponent);
                return BindComponent;
            })();
            exports_1("BindComponent", BindComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJkL2JkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJCaW5kQ29tcG9uZW50IiwiQmluZENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkJpbmRDb21wb25lbnQub25LZXlVcCIsIkJpbmRDb21wb25lbnQub25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBQTtvQkFpQklDLFNBQUlBLEdBQUNBLEVBQUNBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLEdBQUdBLEVBQUNBLEVBQUVBLEVBQUNBLENBQUNBO29CQUN0QkEsV0FBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ2ZBLFVBQUtBLEdBQUVBLEtBQUtBLENBQUNBO29CQUViQSxjQUFTQSxHQUFHQSxJQUFJQSxtQkFBWUEsRUFBNEJBLENBQUNBO2dCQW1CN0RBLENBQUNBO2dCQWpCR0QsK0JBQU9BLEdBQVBBO29CQUNJRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFFQSxFQUFFQSxJQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFFQSxFQUFFQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDdkNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUVBLElBQUlBLENBQUNBO29CQUN0QkEsQ0FBQ0E7b0JBQUFBLElBQUlBLENBQUFBLENBQUNBO3dCQUNGQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDeEJBLENBQUNBO29CQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFFQSxFQUFFQSxJQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDaERBLElBQUlBLENBQUNBLEtBQUtBLEdBQUVBLElBQUlBLENBQUNBO29CQUNyQkEsQ0FBQ0E7b0JBQUFBLElBQUlBLENBQUFBLENBQUNBO3dCQUNGQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdkJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREYsZ0NBQVFBLEdBQVJBO29CQUNJRyxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbkNBLENBQUNBO2dCQXZDTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsTUFBTUE7d0JBQ2ZBLFFBQVFBLEVBQUNBLDhaQVNSQTt3QkFDREEsTUFBTUEsRUFBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7d0JBQ2ZBLE9BQU9BLEVBQUNBLENBQUNBLFdBQVdBLENBQUNBO3FCQUN4QkEsQ0FBQ0E7O2tDQTBCREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQXhDQSxBQXdDQ0EsSUFBQTtZQXhDRCx5Q0F3Q0MsQ0FBQSIsImZpbGUiOiJiZC9iZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYmluZCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICBlbnRlciBkZXRhaWxcclxuICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+bmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiAgWyhuZ01vZGVsKV09XCJzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXlVcCgpXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiYWdlXCI+YWdlPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgIFsobmdNb2RlbCldPVwic2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXlVcCgpXCI+XHJcbiAgICBmaWxsZWQ/e3tmaWxsZWQ/J3llcyc6J25vJ319XHJcbiAgICB2YWxpZD97e3ZhbGlkPyd5ZXMnOidubyd9fVxyXG4gICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIXZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5zdWJtaXQ8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBpbnB1dHM6WydzZWxmJ10sXHJcbiAgICBvdXRwdXRzOlsnc3VibWl0dGVkJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5kQ29tcG9uZW50e1xyXG4gICAgc2VsZj17bmFtZTonJyxhZ2U6Jyd9O1xyXG4gICAgZmlsbGVkID0gZmFsc2U7XHJcbiAgICB2YWxpZD0gZmFsc2U7XHJcblxyXG4gICAgc3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTpzdHJpbmcsYWdlOnN0cmluZ30+KCk7XHJcblxyXG4gICAgb25LZXlVcCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGYubmFtZSE9JycmJnRoaXMuc2VsZi5hZ2UhPScnKXtcclxuICAgICAgICAgICAgdGhpcy5maWxsZWQ9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxmLm5hbWUhPScnJiYvXlxcZCsvLnRlc3QodGhpcy5zZWxmLmFnZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkPSB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQuZW1pdCh0aGlzLnNlbGYpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
