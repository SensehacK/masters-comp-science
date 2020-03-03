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
			try { 
				if (name.contains("Name")) {
					if (value.length() > 0) {
						formNameValid = true;
					}
					else if (!formNameValid)
						out.printf("<p>Please enter a "+name+"!</p>");
				}
				else if (name.contains("Age") && formNameValid) {
					if (value.length() > 0) {

						// Change string to int but with try catch block
						int age = Integer.parseInt(value);
						// Ternary operator
						boolean invalidAge = (age < 0 || age > 125) ? true : false;  	
						boolean underAge = (age > 0 && age < 17) ? true : false;

						if (invalidAge || underAge) {
							out.println("<p>" + (invalidAge ? "Enter Valid Age ranging from 0 - 125" : "You aren't eligible to drive")+ "</p>" );
						} else {
							formAgeValid = true;
							out.println("<p> Your " + name +  " is " + value+ "</p>");
						}
					}
					else if (!formAgeValid)
						out.println("<p>Please enter a Age!</p>"); 	
				}
				// Both Name and Age valid via Boolean
				if (formNameValid && formAgeValid)
					out.println("<p>You are eligible to drive</p>");

			} catch(NumberFormatException e) {
				out.println("<p> Please enter Age as a number! </p>");
			}
		}
	}
}

