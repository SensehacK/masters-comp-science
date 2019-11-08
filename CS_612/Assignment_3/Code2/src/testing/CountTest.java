package testing;

import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;

public class CountTest {

	@Test
	public void test() {
		JunitTesting jtest = new JunitTesting();
		int output = jtest.count("aaaaa");
		assertEquals(5, output);
	}

}
