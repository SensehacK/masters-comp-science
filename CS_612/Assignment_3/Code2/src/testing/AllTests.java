package testing;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ CountTest.class, DivideNegTest.class, DividePosTest.class, SquareTest.class })
public class AllTests {

}
