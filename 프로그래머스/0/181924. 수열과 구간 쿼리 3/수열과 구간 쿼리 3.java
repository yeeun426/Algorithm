class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = arr.clone();
        
        for (int[] query : queries) {
            int i = query[0], j = query[1];
            int temp = answer[i];
            answer[i] = answer[j]; 
            answer[j] = temp;
        }
        return answer;
    }
}
