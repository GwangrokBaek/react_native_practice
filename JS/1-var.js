/**
 * var 키워드의 가장 큰 문제점은 함수 Scope를 가진다는 점
 * -> 함수 Scope를 가지기에 블록 내에서 지역변수로 사용못하는 경우가 있고, 이때문에 오류가 발생하는 경우가 있음
 * 
 * var 키워드 탓에 
 * 
 */

'use strict';

function example1() {
    i = 1;
}

function example2() {
    console.log(i);
}

// example1();
// example2();


(function() {
    for (var j = 0; j < 10; j++) {
        console.log(j)
    }
})();
console.log("last: ", j);