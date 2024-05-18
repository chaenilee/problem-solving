function solution(sides) {
    const max = Math.max(...sides);
    const leftOver = sides.reduce((acc, cur) => acc + cur) - max;
    
    console.log(leftOver, max)
    
    return max < leftOver ? 1 : 2;
    
}