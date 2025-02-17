function solution(emergency) {
    var answer = [];
    const sortEmergency = [...emergency].sort((a,b) => b-a);
    return emergency.map((value) => sortEmergency.indexOf(value)+1);
}