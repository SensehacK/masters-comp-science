package Question_5;
import java.applet.Applet;
import java.awt.*;
import java.io.*;
import java.net.*;
import java.util.StringTokenizer;

public class Que_5_Client extends Applet{
    public Que_5_Client() {
    }
    public void init(){
        try{
            Socket sock = new Socket("localhost", 7000);
            InputStreamReader intream = new InputStreamReader(sock.getInputStream());
            BufferedReader in = new BufferedReader(intream);
            String strReader = in.readLine();
            StringTokenizer str = new StringTokenizer(strReader,"#");
            String message = str.nextToken();
            String color = str.nextToken();

            if ("BLUE".equals(color.toUpperCase())) {
                setBackground(Color.BLUE);
            }
            else if ("GREEN".equals(color.toUpperCase())) {
                setBackground(Color.GREEN);
            }
            else {
            	System.out.println(color + "Please enter valid color:");
                setBackground(Color.WHITE);
            }
            Label labelMessage = new Label(message, Label.LEFT);
            add(labelMessage);
            sock.close();
            in.close();
            repaint();
        }
        catch(Exception e){
            System.out.println("Error invoked: " + e);
            System.exit(0);
        }
    }

    public void paint(Graphics page){

    }
}
