function solution(arr, queries) {
    let answer = arr;
    
    for(let i = 0; i < queries.length; i++){
        for(let j = 0; j < arr.length; j++){
            let [s, e] = queries[i]; 
            if(j >= s && j <= e){
                answer[j] = arr[j] + 1;
            } else {
                answer[j] = arr[j];
            }
        }
    }
    
    return answer;
}