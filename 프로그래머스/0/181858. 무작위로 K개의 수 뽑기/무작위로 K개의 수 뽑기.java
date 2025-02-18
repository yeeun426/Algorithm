import java.util.*;

class Solution {
    public int[] solution(int[] arr, int k) {
        int[] answer = new int[k];
        Arrays.fill(answer, -1); // -1로 채우기

        Set<Integer> set = new LinkedHashSet<>();
        for (int num : arr) set.add(num);

        int i = 0;
        for (int num : set) {
            if (i == k) break;
            answer[i++] = num;
        }
        return answer;
    }
}
