/* 아스키 코드 */
class Solution {
    public String solution(String myString) {
        char ch = 'l';
        int num = (int)ch;
        String answer="";
        for(char str:myString.toCharArray()){
            int numStr=(int)str;
            if(numStr>num){
                answer+=str;
            }else{
                answer+=ch;
            }  
        }
        return answer;
    }
}