import java.util.Arrays;

class Solution {
    public String[] solution(String my_string) {
        String[] answer = new String[my_string.length()];
        int j = 0;
        for(int i = 1 ; i <= my_string.length() ; i++) {
            answer[j++] = my_string.substring(my_string.length()-i,my_string.length());
        }
        
        Arrays.sort(answer);
        return answer;
    }
}