function solution(a, b) {
    let aaa = Number(String(a) + String(b))
    let bbb = Number(String(b) + String(a))
    return aaa >= bbb ? aaa : bbb;
}