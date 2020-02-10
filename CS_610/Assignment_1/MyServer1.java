package PaceAssignment;

import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.Random;

public class MyServer1 {
    public static void main(String[] args) {
        ServerSocket serverSocket = null;
        try {
            serverSocket = new ServerSocket(16790);
            Socket clientSocket = null;

            System.out.println("server1 started");
            clientSocket = serverSocket.accept();
            System.out.println("message recieved");

            String respond = makeTheString();

            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
            out.println(respond);
            BufferedReader br = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            String str = br.readLine();
            System.out.print(str);

            out.close();
            clientSocket.close();
            serverSocket.close();
        } catch (IOException e) {
            System.out.println("Error: " + e);
            System.exit(0);
        }
    }

    public static String makeTheString() {

        final int SIZE = 50;
        String number = "";
        Random rand = new Random();
        int size = rand.nextInt(SIZE) + 1;
        ArrayList<Integer> a = new ArrayList<Integer>(size);
        for (int i = 0; i < size; i++)
            a.add(rand.nextInt(100) + 10);
        // Collections.sort(a);
        for (Integer i : a)
            number += i + " ";

        return number;

    }
}
