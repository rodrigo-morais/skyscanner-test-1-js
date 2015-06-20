function solution(n) {

    if (n <= 1) {
        return n;
    }
    else {
        return solution(n - 1) + (Math.pow(n, 2));
    }
};

function calculate() {
    var result = solution(parseInt(document.getElementById('number').value));

    alert(result);
};