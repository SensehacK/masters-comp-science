package testing;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;

public class DividePosTest {

	@Test
	public void test() {
		JunitTesting test = new JunitTesting();
		double output = test.divide(10, 5);
		assertEquals(2,output);
	}

}
