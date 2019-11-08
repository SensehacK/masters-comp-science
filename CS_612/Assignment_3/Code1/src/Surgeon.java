public class Surgeon extends Doctor {
	
    private boolean operating ;

    public Surgeon(String speciality, boolean operating) {
        super(speciality);
        this.operating = operating;
    }

    public Surgeon(String name, int number, String speciality) {
        super(name, number, speciality);
    }

    public Surgeon(String name, int number, String speciality, boolean operating) {
        super(name, number, speciality);
        this.operating = operating;
    }

    public boolean isOperating() {
        return operating;
    }

    public void setOperating(boolean operating) {
        this.operating = operating;
    }
    
    public String toString() {
    	return name + " " + num + " " + speciality + " Operating: " + operating + " ";
    }
    
    @Override
    public void work(){
    	
    	super.work();
    	if (operating == true) {
    		System.out.print(" " + this.getName() + " is operating now.");
    	}
    	else {
    		System.out.print(" " + this.getName() + " is not operating now.");
    	}
    	
    }
}
