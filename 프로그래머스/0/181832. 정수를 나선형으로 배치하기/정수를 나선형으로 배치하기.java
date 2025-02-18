class Solution {
    public int[][] solution(int n) {
        int[][] answer = new int[n][n]; // 정답 배열
        
        // 방향: 오른쪽(→), 아래(↓), 왼쪽(←), 위쪽(↑)
        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};
        
        int x = 0, y = 0, dir = 0; // 초기 위치 및 방향
        for (int num = 1; num <= n * n; num++) {
            answer[x][y] = num; // 현재 위치에 숫자 삽입
            
            // 다음 이동 위치
            int nx = x + dx[dir];
            int ny = y + dy[dir];
            
            // 범위를 벗어나거나 이미 숫자가 채워진 경우 방향 전환
            if (nx < 0 || nx >= n || ny < 0 || ny >= n || answer[nx][ny] != 0) {
                dir = (dir + 1) % 4; // 방향 변경
                nx = x + dx[dir];
                ny = y + dy[dir];
            }
            
            x = nx;
            y = ny;
        }
        
        return answer;
    }
}