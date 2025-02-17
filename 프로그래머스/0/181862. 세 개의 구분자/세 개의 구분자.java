import java.util.Arrays;

class Solution {
    public String[] solution(String myStr) {
        String[] result = Arrays.stream(myStr.split("[abc]"))
            .filter(s -> !s.isEmpty())
            .toArray(String[]::new);
        
        return result.length != 0 ? result : new String[]{"EMPTY"};
    }
}