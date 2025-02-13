class Solution {
    public int solution(String my_string, String is_prefix) {
        int answer = 0;
        
        if(my_string.length() < is_prefix.length()) return 0;
        if(is_prefix.equals(my_string.substring(0, is_prefix.length()))) return 1;
        
        return answer;
    }
}