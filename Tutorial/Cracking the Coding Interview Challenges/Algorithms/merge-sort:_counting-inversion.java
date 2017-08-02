import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    private static long countInversions(int[] arr) {
        return mergesort(arr, new int[arr.length], 0, arr.length - 1);
    }
    
    private static long mergesort(int[] array, int[] temp, int leftStart, int rightEnd){
        if(leftStart >= rightEnd){
            return 0;
        }
        int middle = (leftStart + rightEnd) / 2;
        long count = 0;
        count += mergesort(array, temp, leftStart,  middle);
        count += mergesort(array, temp, middle + 1, rightEnd);
        count += mergeHalves(array, temp, leftStart, rightEnd);
        return count;
    }
    
    private static long mergeHalves(int[] array, int[] temp, int leftStart, int rightEnd){
        long count = 0;
        int leftEnd = (rightEnd + leftStart) / 2;
        int rightStart = leftEnd + 1;
        int size = rightEnd - leftStart + 1;
        int left = leftStart;
        int right = rightStart;
        int index = leftStart;
        while(left <= leftEnd && right <= rightEnd){
            if(array[left] <= array[right]){
                temp[index++] = array[left++];
            }else{
                temp[index++] = array[right++];
                count += right - index;
            }
        }
        System.arraycopy(array, left, temp, index, leftEnd - left + 1);
        System.arraycopy(array, right, temp, index, rightEnd - right + 1);
        System.arraycopy(temp, leftStart, array, leftStart, size);
        return count;
    }
  
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for(int a0 = 0; a0 < t; a0++){
            int n = in.nextInt();
            int arr[] = new int[n];
            for(int arr_i=0; arr_i < n; arr_i++){
                arr[arr_i] = in.nextInt();
            }
            System.out.println(countInversions(arr));
        }
    }
}
