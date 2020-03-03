import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Enumeration;
@WebServlet("/Form")
public class Form extends HttpServlet {
  private static final long serialVersionUID = 1L;
  boolean formNameValid = false;
  boolean formAgeValid = false;
  
  public Form() {
    super();
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse   
    response) throws ServletException, IOException {
    Enumeration<String> names = request.getParameterNames();
    PrintWriter out = response.getWriter();
    
    while (names.hasMoreElements()){
        String name = (String)names.nextElement();
        String value = request.getParameter(name);
//        System.out.println("(" + name +  ", " + value + ")");  
        
        if (name.contains("Name")) {
        	if (value != "") {
        		formNameValid = true;
        	}
        	else if (!formNameValid)
        		out.println("<p>Please enter a name!</p>");
        		System.out.println("" );
        }
        else if (name.contains("Age")) {
        	if (value != "") {
        		int age = Integer.parseInt(value);
            	boolean invalidAge = (age < 0 || age > 125) ? true : false;  	
            	boolean underAge = (age > 0 && age < 17) ? true : false;
            	
            	if (invalidAge || underAge) {
            		System.out.println(invalidAge ? "Enter Valid Age" : "You aren't eligible to drive");
            	} else {
            		formAgeValid = true;
            		System.out.println("Your " + name +  " is " + value);
            	}
        	}
        	else if (!formAgeValid)
        		System.out.println("Please enter a Age!"); 	
        }
        if (formNameValid && formAgeValid)
        	System.out.println("You are eligible to drive");
      }
  }
}

