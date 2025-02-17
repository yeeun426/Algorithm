class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
            
        for(int num : num_list) {
            int cnt = 0;
            while(num > 1) {
                cnt++;
                num /= 2;
            }
            answer += cnt;
        }
        return answer;
    }
}