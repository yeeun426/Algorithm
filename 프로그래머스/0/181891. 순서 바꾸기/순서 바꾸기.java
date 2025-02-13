
class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = new int[num_list.length];
        
        for(int i = n, j = 0 ; i < num_list.length ; i++, j++) {
            answer[j] = num_list[i];
        }
        
        for(int i = 0, j = num_list.length - n ; j < num_list.length ; i++, j++) {
            answer[j] = num_list[i];
        }

        return answer;
    }
}