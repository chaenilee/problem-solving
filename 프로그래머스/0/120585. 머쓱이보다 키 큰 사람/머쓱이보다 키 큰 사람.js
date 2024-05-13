function solution(array, height) {
    let arr = array.filter(elm => elm > height);   
    return arr.length;
}