import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = new int[queries.length];
       
        for (int i = 0; i < queries.length; i++) {
            int s = queries[i][0], e = queries[i][1], k = queries[i][2];
            
            int min = -1; 
            for (int j = s; j <= e; j++) {
                if (arr[j] > k) {
                    if (min == -1 || arr[j] < min) {
                        min = arr[j];
                    }
                }
            }
            answer[i] = min;
        }
        return answer;
    }
}
