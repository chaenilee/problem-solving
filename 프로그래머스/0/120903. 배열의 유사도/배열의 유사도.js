function solution(s1, s2) {
    let intersection = s1.filter(x => s2.includes(x))
    return intersection.length;
}