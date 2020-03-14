package Question_1;
import java.io.*;
import java.net.ConnectException;
import java.net.Socket;

public class Question_1_Client {
	public static void main(String[] args) throws IOException, InterruptedException {
		Socket clientSocket = null;
		BufferedReader in = null;
		System.out.println("Welcome to the Daytime client.");
		boolean cycle = true;
		while (cycle) {
			try {
				clientSocket = new Socket("localhost", 4321);
				in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
				String s = in.readLine();
				System.out.println("Here is the timestamp received from the server: " + s);
				in.close();
				clientSocket.close();
				clientSocket.close();
				cycle = false;
				 
			}catch(ConnectException e)
		    {
				
					Thread.sleep(1000);
					System.out.println("Error: " + e);
			        System.out.println("Waiting for server to connect");
				
				
		        
		       
		    }
			catch (IOException e) {
				System.out.println("Error: " + e);
				System.exit(0);
			}
			
		}
		System.out.println("The program terminated with no error and no exception");
	}
}