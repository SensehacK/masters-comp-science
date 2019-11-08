public class Doctor extends HospitalEmployee {
    String speciality;


    public Doctor(String speciality) {
        this.speciality = speciality;
    }

    public Doctor(String name, int number, String speciality) {
        super(name,number);
        this.speciality = speciality;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }
    
    public String toString() {
        return name + " " + num + " " + speciality + " ";
    }
    
    @Override
    public void work(){
    	super.work();
        System.out.print(" " + this.getName() + " is a(n) " + this.getSpeciality() +  " doctor.");
    }
}
