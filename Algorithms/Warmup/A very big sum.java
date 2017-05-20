import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] a = new int[n];
    long sum = 0;

    for (int x = 0; x < a.length; x++) {
        a[x] = sc.nextInt();
        sum += a[x];
    }

    System.out.print(sum);
    }
}
