import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 첫 번째 행렬 입력
        int n = sc.nextInt(); // A의 행 개수
        int m = sc.nextInt(); // A의 열 개수 (B의 행 개수)
        int[][] matrixA = new int[n][m];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                matrixA[i][j] = sc.nextInt();
            }
        }

        // 두 번째 행렬 입력
        sc.nextInt(); // 두 번째 행렬의 행 개수 (입력값 무시)
        int k = sc.nextInt(); // B의 열 개수
        int[][] matrixB = new int[m][k];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < k; j++) {
                matrixB[i][j] = sc.nextInt();
            }
        }

        // 결과 행렬 C (n x k) 생성
        int[][] matrixC = new int[n][k];

        // 행렬 곱셈 수행
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < k; j++) {
                matrixC[i][j] = 0; // 초기화
                for (int l = 0; l < m; l++) {
                    matrixC[i][j] += matrixA[i][l] * matrixB[l][j];
                }
            }
        }

        // 결과 출력
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < k; j++) {
                System.out.print(matrixC[i][j] + " ");
            }
            System.out.println();
        }

        sc.close();
    }
}
