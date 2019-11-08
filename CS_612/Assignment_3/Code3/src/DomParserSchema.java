import java.io.IOException;
// DOM
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import javax.xml.parsers.ParserConfigurationException;
import org.xml.sax.ErrorHandler;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;
import org.xml.sax.InputSource;

public class DomParserSchema {

  private DomParserSchema() {}
  
  // validate DOM and internal XSD 
  public static boolean validateWithIntXSDDOM(String xml) 
  throws ParserConfigurationException, IOException 
  {
    try {
      DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
      factory.setValidating(true);
      factory.setNamespaceAware(true);
      factory.setAttribute("http://java.sun.com/xml/jaxp/properties/schemaLanguage", 
              "http://www.w3.org/2001/XMLSchema");
      DocumentBuilder builder = factory.newDocumentBuilder();        

      builder.setErrorHandler(
    		  
          new ErrorHandler() {
            public void warning(SAXParseException e) throws SAXException {
              System.out.println("WARNING: " + e.getMessage()); // do nothing
            }


            public void fatalError(SAXParseException e) throws SAXException {
              System.out.println("FATAL: " + e.getMessage());
              throw e;
            }
            
            public void error(SAXParseException e) throws SAXException {
                System.out.println("ERROR: " + e.getMessage());
                throw e;
              }
          }
    
      );

      builder.parse(new InputSource(xml));
      return true;
    }    
    catch (ParserConfigurationException pce) {
      throw pce;
    } 
    catch (IOException io) {
      throw io;
    }
    catch (SAXException se){
      return false;
  }
}

public static void main (String args[]) throws Exception{ 
    System.out.println
       (DomParserSchema.validateWithIntXSDDOM
          ("note-xsd.xml"));
  }
}