function solution(myString, pat) {
    answer = [...myString].map(x => x === "A" ? "B" : "A").join("")

    return answer.includes(pat) ? 1 : 0;
}