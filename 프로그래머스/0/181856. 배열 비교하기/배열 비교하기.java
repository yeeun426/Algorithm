class Solution {
    public int solution(int[] arr1, int[] arr2) {
        int answer = 0;
        if(arr1.length > arr2.length) {
            return 1;
        } else if (arr1.length < arr2.length) {
            return -1;
        } 
        
        int sum1 = 0, sum2 = 0;
        for(int i : arr1) {
            sum1 += i;
        }
        
        for(int i : arr2) {
            sum2 += i;
        }
        
        if(sum1 > sum2) {
            return 1;
        } else if (sum1 < sum2) {
            return -1;
        } else {
            return 0;
        }
        
    }
}