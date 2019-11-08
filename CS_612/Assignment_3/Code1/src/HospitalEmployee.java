public class HospitalEmployee {
    protected int num;
    protected String name;


    public HospitalEmployee() {
    }

    public HospitalEmployee(String name, int num) {
        this.num = num;
        this.name = name;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }
    
    public String toString() {
        return name + " " + num + " ";
    }
    
    public void work(){
        System.out.print("\n" + this.getName()+" works for the hospital.");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

   

}
