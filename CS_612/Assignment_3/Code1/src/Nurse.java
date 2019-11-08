public class Nurse extends HospitalEmployee {
    int numOfPatients;

    public Nurse( String name,int number, int numOfPatients) {
        super(name, number);
        this.numOfPatients = numOfPatients;
    }

    public int getNumOfPatients() {
        return numOfPatients;
    }

    public void setNumOfPatients(int numOfPatients) {
        this.numOfPatients = numOfPatients;
    }
    
    public String toString() {
    	return name + " " + num + " has " + numOfPatients + " patients ";
    }
    
    @Override
    public void work(){
    	super.work();
        System.out.print(" " + this.getName() + " is a nurse with " + this.getNumOfPatients() + " patients.");
    }
}
