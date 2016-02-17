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
    var CfComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CfComponent = (function () {
                function CfComponent() {
                    this.self = { name: '', age: '' };
                    this.filled = false;
                    this.valid = false;
                    this.cfed = new core_1.EventEmitter();
                }
                CfComponent.prototype.onKeyUp = function () {
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
                CfComponent.prototype.onCf = function () {
                    this.cfed.emit(this.self);
                };
                CfComponent = __decorate([
                    core_1.Component({
                        selector: 'cf',
                        template: "\n    <h1>submitted.</h1>\n    <span class=\"highlight\">{{self.name}}</span>\n    <span class=\"highlight\">{{self.age}}</span>\n    <label for=\"name\">name</label>\n    <input type=\"text\" id=\"name\"  [(ngModel)]=\"self.name\" (keyup)=\"onKeyUp()\">\n    <label for=\"age\">age</label>\n    <input type=\"text\" id=\"age\"  [(ngModel)]=\"self.age\" (keyup)=\"onKeyUp()\">\n    filled?{{filled?'yes':'no'}}\n    valid?{{valid?'yes':'no'}}\n    <button [disabled]=\"!valid\" (click)=\"onCf()\">submit</button>\n    ",
                        inputs: ['self'],
                        outputs: ['cfed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CfComponent);
                return CfComponent;
            })();
            exports_1("CfComponent", CfComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJkL2NmLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDZkNvbXBvbmVudCIsIkNmQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQ2ZDb21wb25lbnQub25LZXlVcCIsIkNmQ29tcG9uZW50Lm9uQ2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtvQkFvQklDLFNBQUlBLEdBQUNBLEVBQUNBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLEdBQUdBLEVBQUNBLEVBQUVBLEVBQUNBLENBQUNBO29CQUN0QkEsV0FBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ2ZBLFVBQUtBLEdBQUVBLEtBQUtBLENBQUNBO29CQUNiQSxTQUFJQSxHQUFDQSxJQUFJQSxtQkFBWUEsRUFBNEJBLENBQUFBO2dCQWtCckRBLENBQUNBO2dCQWpCR0QsNkJBQU9BLEdBQVBBO29CQUNJRSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFFQSxFQUFFQSxJQUFFQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFFQSxFQUFFQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDdkNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUVBLElBQUlBLENBQUNBO29CQUN0QkEsQ0FBQ0E7b0JBQUFBLElBQUlBLENBQUFBLENBQUNBO3dCQUNGQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDeEJBLENBQUNBO29CQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxJQUFFQSxFQUFFQSxJQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDaERBLElBQUlBLENBQUNBLEtBQUtBLEdBQUVBLElBQUlBLENBQUNBO29CQUNyQkEsQ0FBQ0E7b0JBQUFBLElBQUlBLENBQUFBLENBQUNBO3dCQUNGQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDdkJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREYsMEJBQUlBLEdBQUpBO29CQUNJRyxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDOUJBLENBQUNBO2dCQXhDTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsSUFBSUE7d0JBQ2JBLFFBQVFBLEVBQUNBLHdnQkFXUkE7d0JBQ0RBLE1BQU1BLEVBQUNBLENBQUNBLE1BQU1BLENBQUNBO3dCQUNmQSxPQUFPQSxFQUFDQSxDQUFDQSxNQUFNQSxDQUFDQTtxQkFDbkJBLENBQUNBOztnQ0F5QkRBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0F6Q0EsQUF5Q0NBLElBQUE7WUF6Q0QscUNBeUNDLENBQUEiLCJmaWxlIjoiYmQvY2YuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2NmJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxoMT5zdWJtaXR0ZWQuPC9oMT5cclxuICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tzZWxmLm5hbWV9fTwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+e3tzZWxmLmFnZX19PC9zcGFuPlxyXG4gICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5uYW1lPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiICBbKG5nTW9kZWwpXT1cInNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleVVwKClcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJhZ2VcIj5hZ2U8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiAgWyhuZ01vZGVsKV09XCJzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleVVwKClcIj5cclxuICAgIGZpbGxlZD97e2ZpbGxlZD8neWVzJzonbm8nfX1cclxuICAgIHZhbGlkP3t7dmFsaWQ/J3llcyc6J25vJ319XHJcbiAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhdmFsaWRcIiAoY2xpY2spPVwib25DZigpXCI+c3VibWl0PC9idXR0b24+XHJcbiAgICBgLFxyXG4gICAgaW5wdXRzOlsnc2VsZiddLFxyXG4gICAgb3V0cHV0czpbJ2NmZWQnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDZkNvbXBvbmVudHtcclxuICAgIHNlbGY9e25hbWU6JycsYWdlOicnfTtcclxuICAgIGZpbGxlZCA9IGZhbHNlO1xyXG4gICAgdmFsaWQ9IGZhbHNlO1xyXG4gICAgY2ZlZD1uZXcgRXZlbnRFbWl0dGVyPHtuYW1lOnN0cmluZyxhZ2U6c3RyaW5nfT4oKVxyXG4gICAgb25LZXlVcCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGYubmFtZSE9JycmJnRoaXMuc2VsZi5hZ2UhPScnKXtcclxuICAgICAgICAgICAgdGhpcy5maWxsZWQ9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxmLm5hbWUhPScnJiYvXlxcZCsvLnRlc3QodGhpcy5zZWxmLmFnZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkPSB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2YoKXtcclxuICAgICAgICB0aGlzLmNmZWQuZW1pdCh0aGlzLnNlbGYpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
