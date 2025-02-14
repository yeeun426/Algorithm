class Solution {
    public int solution(int n, String control) {
        String [] controlArr = control.split("");
        
        for(int i = 0 ; i < controlArr.length ; i++) {
            switch(controlArr[i]) {
                case "w" :
                    n += 1;
                    break;
                case "s" :
                    n -= 1;
                    break;
                case "d" :
                    n += 10;
                    break;
                case "a" :
                    n -= 10;
                    break;
            }
        }
        return n;
    }
}