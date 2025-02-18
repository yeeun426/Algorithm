import java.util.*;
class Solution {
    public int[] solution(int[] arr) {
        ArrayList<Integer> stk=new  ArrayList();
        for(int i=0;i<arr.length;i++){
            if(stk.isEmpty()){
                stk.add(arr[i]);
                
            }else if(stk.get(stk.size()-1)==arr[i]){
                //stk는 리스트라 charAt()못쓰고 get으로
                //0부터 시작이니까 size()-1
                 stk.remove(stk.size() - 1);
                //add<>remove
                
            }else{
                stk.add(arr[i]);
                
            }
        }
         if (stk.isEmpty()) {
            return new int[] {-1};
        }
        
        // ArrayList<Integer>를 int[]로 변환
        int[] answer = new int[stk.size()];
        for (int j = 0; j < stk.size(); j++) {
            answer[j] = stk.get(j);
        }
        
        return answer;
        
    }
}