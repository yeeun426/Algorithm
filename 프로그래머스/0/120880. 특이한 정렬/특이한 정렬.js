function solution(numlist, n) {
    const close = numlist.map(el => el - n);
    const sorted = [...close].sort((a,b) => Math.abs(a)-Math.abs(b) || b - a);
    return sorted.map((el) => numlist[close.indexOf(el)]);
}