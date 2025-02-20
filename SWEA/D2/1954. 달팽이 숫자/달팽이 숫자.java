import java.util.Scanner;

public class Solution {

 static StringBuilder sb = new StringBuilder();


 public static void main(String[] args) {


  Scanner sc = new Scanner(System.in);


  int T = sc.nextInt();


  for (int i = 0; i < T; i++) {
   int N = sc.nextInt();


   // 우, 하, 좌, 상
   int[] dx = { 0, 1, 0, -1 }; 
   int[] dy = { 1, 0, -1, 0 };


   int[][] arr = new int[N][N];


   sb.append("#").append(i + 1).append("\n");


   int x = 0, y = 0, dir = 0; // 초기 위치 및 방향


   for (int j = 1; j <= N * N; j++) {
    arr[x][y] = j; // 현재 위치에 숫자 삽입


    int nx = x + dx[dir]; 
    int ny = y + dy[dir]; 


    // 범위 체크
    if (nx < 0 || nx >= N || ny < 0 || ny >= N || arr[nx][ny] != 0) {
     dir = (dir + 1) % 4; // 방향 전환
     
     nx = x + dx[dir];
     ny = y + dy[dir];
    }
    
    x = nx; // x 갱신 
    y = ny; // y 갱신
   }
   
   for(int s = 0; s < N; s++) {
    for(int t = 0; t < N; t++) {
     sb.append(arr[s][t]).append(" ");
    }
    sb.append("\n");
   }
}
  
  System.out.println(sb);
  sc.close();


 }


}