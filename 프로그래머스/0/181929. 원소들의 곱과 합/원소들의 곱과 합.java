class Solution {
    public int solution(int[] num_list) {
        int a = 1;
        int b = 0;
       for(int c:num_list){
           a *=c;
           b +=c;
       }
        if(a < b*b){
            return 1;
        }else{
            return 0;
        }
    }
}