class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        int strLength = myString.split("").length;
        int patLength = pat.split("").length;
        
        for(int i = 0 ; i < strLength - patLength + 1 ; i++) {
            if(myString.substring(i, i + patLength).equals(pat))  {
                answer++;
            }
        }
        return answer;
    }
}