function solution(order) {
    var answer = 0;
    return order.toString().split("").filter((v) => "369".includes(v)).length;
}
