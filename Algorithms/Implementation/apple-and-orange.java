import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) 
    {
        Scanner in = new Scanner(System.in);
        int appleCount=0,orangeCount=0;
        int s = in.nextInt();
        int t = in.nextInt();
        int a = in.nextInt();
        int b = in.nextInt();
        int m = in.nextInt();
        int n = in.nextInt();
        int[] apple = new int[m];
        for(int i=0; i < m; i++)
        {
            apple[i] = in.nextInt();
            if(apple[i]+a>=s&&apple[i]+a<=t)
                appleCount++;
        }
        int[] orange = new int[n];
        for(int i=0; i < n; i++)
        {
            orange[i] = in.nextInt();
            if(orange[i]+b>=s&&orange[i]+b<=t)
                orangeCount++;
        }
        System.out.println(appleCount);
        System.out.println(orangeCount);
    }
}
