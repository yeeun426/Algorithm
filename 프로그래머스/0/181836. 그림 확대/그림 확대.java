class Solution {
    public String[] solution(String[] picture, int k) {
        int n = picture.length;
        int m = picture[0].length();
        
        String[] answer = new String[n * k]; 
        for (int i = 0; i < n; i++) {
            StringBuilder enlargedRow = new StringBuilder();
            for (int j = 0; j < m; j++) {
                char c = picture[i].charAt(j);
                for (int l = 0; l < k; l++) {
                    enlargedRow.append(c);
                }
            }
            for (int p = 0; p < k; p++) {
                answer[i * k + p] = enlargedRow.toString();
            }
        }
        return answer;
    }
}
