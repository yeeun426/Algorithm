import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        String str = "";
        
        for(int i = 0 ; i < flag.length ; i++) {
            if(flag[i]) {
                str += (arr[i] + "").repeat(arr[i] * 2);
            } else {
                str = str.substring(0, str.length() - arr[i]);
            }
        }   
        return str.chars().map(c -> c - '0').toArray();
    }
}