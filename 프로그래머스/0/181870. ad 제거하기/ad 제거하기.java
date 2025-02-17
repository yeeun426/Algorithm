import java.util.*;

public class Solution {
    public String[] solution(String[] strArr) {
        
        ArrayList<String> str = new ArrayList<>();
        
        
        for (String s : strArr) {
            if (!s.contains("ad")) {  
                str.add(s);
            }
        }
        
       
        String[] answer=str.toArray(new String[str.size()]);
        return answer;

    }
}