import java.util.*;

class Solution {
    
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        int[][] answer = {};
        
        Map<String, Integer> map = new HashMap<>();
        map.put("code", 0);
        map.put("date", 1);
        map.put("maximum", 2);
        map.put("remain", 3);
        
        System.out.println(map);
        int[][] arr = Arrays.stream(data).filter(t -> t[map.get(ext)] < val_ext).toArray(int[][]::new);
        
        Arrays.sort(arr, (o1, o2) -> {
            return o1[map.get(sort_by)] - o2[map.get(sort_by)];
        });
        
        return arr;
    }
}