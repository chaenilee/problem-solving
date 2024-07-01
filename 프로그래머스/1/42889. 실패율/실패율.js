function solution(n, stages) {
    var valueArr = [];
    let answer = []
    let failPlayer = []
    let totalPlayer = [];
    let finalAnswer = []
    let arr = []
    
    for(let i = 1; i <= n; i++){
        totalPlayer.push(stages.filter(x => x >= i).length);
        failPlayer.push(stages.filter(x => x === i ).length);
    }

    let value, index;
    let indexArr = [];
    for(let i = 0; i < totalPlayer.length; i++){
        value = failPlayer[i] / totalPlayer[i];
        valueArr.push(value);
        indexArr.push(i);
        
        answer.push([value, i + 1])
        finalAnswer = answer.sort((a, b) => b[0] - a[0]);
        
        


     


    }

    for(let i = 0; i < finalAnswer.length; i++){
        arr.push(finalAnswer[i][1])
    }
    

    return arr;
}