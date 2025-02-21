import java.util.Scanner;
import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int N = sc.nextInt();
		int K = sc.nextInt();		
		
		boolean[] visited = new boolean[100001];
		Queue<int[]> q = new LinkedList<>();
		int time = 0;
		
		q.offer(new int[] {N, time});
		visited[N] = true;
		
		while(!q.isEmpty()) {
			int[] arr = q.poll();
			int cur = arr[0], curTime = arr[1];
			if(cur == K) {
				System.out.print(curTime);
				break;
			}

			if (cur * 2 <= 100000 && !visited[cur * 2]) {
			    q.offer(new int[] {cur * 2, curTime + 1});  
			    visited[cur * 2] = true;
		   }
		   if (cur + 1 <= K && !visited[cur + 1]) {
			    q.offer(new int[] {cur + 1, curTime + 1});  
			    visited[cur + 1] = true;
			}
		   if (cur - 1 >= 0 && !visited[cur - 1]) {
			    q.offer(new int[] {cur - 1, curTime + 1});  
			    visited[cur - 1] = true;
			}
			
		}
		sc.close();
	}

}
