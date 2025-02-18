class Solution {
    public String[] solution(String[] picture, int k) {
        int rows = picture.length;
        int cols = picture[0].length();
        String[] answer = new String[rows * k]; 
        
        for (int i = 0; i < rows; i++) {
            StringBuilder bigRow = new StringBuilder();
            for (int j = 0; j < cols; j++) {
                char c = picture[i].charAt(j);
                for (int l = 0; l < k; l++) {
                    bigRow.append(c);
                }
            }
            for (int p = 0; p < k; p++) {
                answer[i * k + p] = bigRow.toString();
            }
        }
        return answer;
    }
}
