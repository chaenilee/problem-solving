function solution(todo_list, finished) {
    return todo_list.filter(x => finished[todo_list.indexOf(x)] === false);
}