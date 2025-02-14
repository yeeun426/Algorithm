class Solution {
    public int solution(int a, int b) {
        int ab = Integer.parseInt(a + "" + b);
        int ba = Integer.parseInt(b + "" + a);     
        if(ab > ba) {
            return ab;
        } else {
            return ba;
        }
    }
}