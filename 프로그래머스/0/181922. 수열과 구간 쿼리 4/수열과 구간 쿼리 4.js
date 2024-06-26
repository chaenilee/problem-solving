function solution(arr, queries) {    
    for(let i = 0; i < queries.length; i++){
        let startIdx = queries[i][0];
        let endIdx = queries[i][1];
        let k = queries[i][2];
        
        for(let j = startIdx; j <= endIdx; j++){
            if(j % k === 0) arr[j] += 1;            
        }
    }
    return arr;
}