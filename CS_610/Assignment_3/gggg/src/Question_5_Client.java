import java.applet.Applet;
import java.awt.*;
import java.io.*;
import java.net.*;
import java.util.StringTokenizer;

public class Question_5_Client extends Applet{
    public Question_5_Client() {
    }
    //Complete this class

    public void init(){
        try{
            Socket sock = new Socket("localhost", 7000);
            InputStreamReader intream = new InputStreamReader(sock.getInputStream());
            BufferedReader in = new BufferedReader(intream);
            String strReader = in.readLine();
            StringTokenizer str = new StringTokenizer(strReader,"#");
            String msg = str.nextToken();
            String color = str.nextToken();

            if ("GREEN".equals(color.toUpperCase())) {
                setBackground(Color.GREEN);
            }
            else if ("BLUE".equals(color.toUpperCase())) {
                setBackground(Color.BLUE);
            }
            else {
                setBackground(Color.WHITE);
            }
            Label lblMessage = new Label(msg, Label.LEFT);
            add(lblMessage);
            sock.close();
            in.close();
            repaint();
        }
        catch(Exception e){
            System.out.println("Error: " + e);
            System.exit(0);
        }
    }

    public void paint(Graphics page){

    }
}
