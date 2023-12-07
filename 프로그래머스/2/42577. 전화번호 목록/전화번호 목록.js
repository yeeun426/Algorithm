function solution(phone_book) {
    var answer = true;
    const phoneMap = new Map();

    phone_book.sort();
    
    for(let i = 0 ; i < phone_book.length-1 ; i++) {
        let shortNum = "";
        let prefix = "";
        
        if(phone_book[i].length > phone_book[i+1].length)  {
            shortNum = phone_book[i+1]
            prefix = phone_book[i].slice(0, phone_book[i+1].length);
        } else {
            shortNum = phone_book[i]
            prefix = phone_book[i+1].slice(0, phone_book[i].length);
        }
        
        if(prefix === shortNum) answer = false;
    }
    
    return answer;
}