function discriminant(a,b,c) {
    var d = b * b - 4 * a * c;
    var x;
    
    if ( d > 0 ) {
        x = (-b + Math.sqrt(d))/2*a;
        
        
    }
    
    if ( d == 0 ) {
        x = -b/2*a;
    }
    
    if ( d < 0 ) {
        x = 'Не має коренів!';
    }
    return x;
}

var a = prompt('Введіть будь-ласка перше число!');
var b = prompt('Введіть будь-ласка друге число!');
var c = prompt('Введіть будь-ласка третє число!');

alert( 'Наш результат:' + discriminant(a,b,c));