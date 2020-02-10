package PaceAssignment;

import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class MyClient {

    static String s1 = "";
    static String s2 = "";

    static ArrayList<Integer> a = new ArrayList<Integer>();

    public static void main(String[] args) {

        String combineString = "";

        Thread t1 = new Thread(new Runnable() {

            @Override
            public void run() {
                Socket clientSocket = null;
                BufferedReader in = null;

                int ip;
                try {
                    ip = 16790;
                    String host = "localhost"; // ("vulcan.seidenberg.pace.edu");
                    clientSocket = new Socket(host, ip);
                    in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream())); // receive
                    s1 = in.readLine();
                    while (s1 == null) // As long as there is nothing in the stream keep reading
                        s1 = in.readLine();
                    System.out.println(s1);
                    in.close();
                    clientSocket.close();
                } catch (IOException e) {
                    System.out.println("Error: " + e);
                    System.exit(0);
                }
            }
        });

        Thread t2 = new Thread(new Runnable() {

            @Override
            public void run() {
                Socket clientSocket = null;
                BufferedReader in = null;

                int ip;
                try {

                    ip = 16791;
                    String host = "localhost";
                    clientSocket = new Socket(host, ip);
                    in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                    s2 = in.readLine();
                    while (s2 == null) // As long as there is nothing in the stream keep reading
                        s2 = in.readLine();
                    System.out.println(s2);
                    in.close();
                    clientSocket.close();
                } catch (IOException e) {
                    System.out.println("Error: " + e);
                    System.exit(0);
                }
            }
        });

        t1.start();
        t2.start();
        try {
            t1.join();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try {
            t2.join();
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        combineString = s1 + s2;

        StringTokenizer stringToken = new StringTokenizer(combineString);
        while (stringToken.hasMoreTokens()) {
            String t = stringToken.nextToken();

            int i = Integer.parseInt(t);
            a.add(i);

        }
        Collections.sort(a);
        System.out.println(a);
    }

}
