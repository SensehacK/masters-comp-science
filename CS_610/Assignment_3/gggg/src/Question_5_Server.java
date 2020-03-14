import java.net.*;
import java.io.*;
import java.util.*;

public class Question_5_Server {
    // Complete this class
    public static void main(String args[]) throws Exception {
        try {
            ServerSocket sersock = new ServerSocket(7000);
            System.out.println("Server is ready");
            Socket sock = sersock.accept();

            System.out.println("Enter blue green for a color:");
            String color = new Scanner(System.in).nextLine();
            System.out.println("Enter a message:");
            String message = new Scanner(System.in).nextLine();
            String fullMessage = message + "#" + color;

            PrintWriter out = new PrintWriter(sock.getOutputStream(), true);
            out.println(fullMessage);
            out.close();
            sock.close();
            sersock.close();
        } catch (Exception e) {
            System.out.println("Error: " + e);
            System.exit(0);
        }
    }
}
