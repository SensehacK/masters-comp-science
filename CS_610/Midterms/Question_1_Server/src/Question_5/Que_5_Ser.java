package Question_5;
import java.net.*;
import java.io.*;
import java.util.*;

public class Que_5_Ser {
    // Complete this class
    public static void main(String args[]) throws Exception {
        try {
            ServerSocket serverSock = new ServerSocket(7000);
            System.out.println("Server is up and running!");
            Socket socket = serverSock.accept();

            System.out.println("Enter blue or green for a color:");
            String colorInput = new Scanner(System.in).nextLine();
            System.out.println("Enter a message:");
            String messageInput = new Scanner(System.in).nextLine();
            String fullMessage = messageInput + "#" + colorInput;

            PrintWriter printW = new PrintWriter(socket.getOutputStream(), true);
            printW.println(fullMessage);
            printW.close();
            socket.close();
            serverSock.close();
        } catch (Exception e) {
            System.out.println("Error: " + e);
            System.exit(0);
        }
    }
}
