import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = new int[queries.length];
       
        for (int i = 0; i < queries.length; i++) {
            int s = queries[i][0], e = queries[i][1], k = queries[i][2];
            
            int minValue = -1; 
            for (int j = s; j <= e; j++) {
                if (arr[j] > k) {
                    if (minValue == -1 || arr[j] < minValue) {
                        minValue = arr[j];
                    }
                }
            }
            answer[i] = minValue;
        }
        
        return answer;
    }
}
