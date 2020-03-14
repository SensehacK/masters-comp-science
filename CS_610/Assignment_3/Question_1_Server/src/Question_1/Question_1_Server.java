package Question_1;
import java.io.*;
import java.net.*;
import java.util.*;

public class Question_1_Server {
  public static void main(String[] args) throws IOException {
    ServerSocket serverSocket = null;
    Socket clientSocket = null;
    PrintWriter out = null;
    System.out.println("Daytime server ready.");
    try {
      serverSocket = new ServerSocket(4321);
      while(true){
        clientSocket = serverSocket.accept(); 
        System.out.println("Request received.");
         out = new PrintWriter(clientSocket.getOutputStream(), true);
         Date timestamp = new Date ();
        out.println(timestamp.toString());
      }
    } catch (IOException e) {
      System.out.println("Error: " + e);
      System.exit(0);
    }
    out.close();
    clientSocket.close();
    serverSocket.close();
  }
}
