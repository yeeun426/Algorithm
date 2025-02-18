import java.util.Arrays;

class Solution {
    public String[] solution(String[] picture, int k) {
        int rows = picture.length;
        int cols = picture[0].length();
        String[] answer = new String[rows * k]; 
        
        for (int i = 0; i < rows; i++) {
            StringBuilder bigRow = new StringBuilder();
            for (int j = 0; j < cols; j++) {
                char c = picture[i].charAt(j); 
                bigRow.append(String.valueOf(c).repeat(k));
            }
            Arrays.fill(answer, i * k, (i + 1) * k, bigRow.toString());
        }
        return answer;
    }
}
