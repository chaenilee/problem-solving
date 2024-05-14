function solution(n) {
    return (n + "").split("").reverse().map(num => Number(num));
}