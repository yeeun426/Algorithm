class Solution {
    public int solution(String binomial) {
        String[] str= binomial.split(" ");
        int a=Integer.parseInt(str[0]);
       
        int b=Integer.parseInt(str[2]);
        
        switch(str[1]){
            case "+": return a+b;
            case "-": return a-b;
            case "*": return a*b;  
            default: return 0;
        }
    }
}