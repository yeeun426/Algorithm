import java.util.*;
class Solution {
    public ArrayList<Integer> solution(int[] arr, int[] delete_list) {
        ArrayList<Integer> result=new ArrayList<>();
        ArrayList<Integer> deleteList=new ArrayList<>();
        
        for(int d:delete_list){
            deleteList.add(d);
        }
        
        for(int a:arr){
            if(!deleteList.contains(a)){
                 result.add(a);
            }
        }
        return result;
    }
}