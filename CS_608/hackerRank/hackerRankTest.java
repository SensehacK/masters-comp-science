
public class hackerRankTest {

    public int divide(int a, int b) {
        int c = -1;

        try {
            c = a / b;
        } catch (Exception e) {
            System.out.println("Exception");
        } finally {
            System.out.println("Finally");
        }

        return c;
    }

    public static void main(String args[]) {
        hackerRankTest c = new hackerRankTest();
        // c.divide(4, 0);
        c.divide(3, 1);
        System.out.println("hackerRankTest()");
    }
}
