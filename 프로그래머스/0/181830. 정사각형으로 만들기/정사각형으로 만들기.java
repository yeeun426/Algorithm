class Solution {
    public int[][] solution(int[][] arr) {
        int rows = arr.length;
        int cols = arr[0].length; 
        
        if (rows > cols) {
            for (int i = 0; i < rows; i++) {
                int[] newRow = new int[rows];
                System.arraycopy(arr[i], 0, newRow, 0, cols);
// System.arraycopy(원본 배열, 복사할 항목의 시작 인덱스, 새 배열, 새 배열에서 붙여 넣을 시작 인덱스, 복사 개수) 
                arr[i] = newRow;
            }
        } else if (cols > rows) {
            int[][] newArr = new int[cols][cols];
            for (int i = 0; i < rows; i++) {
                System.arraycopy(arr[i], 0, newArr[i], 0, cols);
            }
            arr = newArr;
        }
        
        return arr;
    }
}