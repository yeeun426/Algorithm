import java.util.*;

class Solution {
    public ArrayList<String> solution(String myString) {
        
        ArrayList<String> answer = new ArrayList<>();
        String[] str = myString.split("x");
        
        for(String s:str) 
            if(!s.isEmpty()) answer.add(s);
        
        Collections.sort(answer);
        return answer;
    }
}