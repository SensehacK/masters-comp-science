package testing;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.Test;

public class DivideNegTest {

	@Test
	public void test() {
		JunitTesting test = new JunitTesting();
		assertThrows(ArithmeticException.class, () -> test.divide(5, 0));
	}

}
