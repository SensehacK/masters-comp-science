package testing;

public class JunitTesting 
{
	/**
	 * Method squares a given number.
	 * @param x
	 * @return int
	 */
	public int square(int x)
	{
		return x*x;
	}
	
	/**
	 * Method divides b into a.
	 * @param a
	 * @param b
	 * @return double
	 */
	public double divide(int a, int b)
	{
		return a / b;
	}
	
	/**
	 *  Method counts all how many 'a' or 'A' characters are in a word.
	 * @param word
	 * @return int
	 */
	public int count(String word)
	{
		int count = 0;
		
		for(int i = 0; i < word.length(); i++)
		{
			if(word.charAt(i) == 'a' || word.charAt(i) == 'A')
			{
				count++;
			}
		}
		
		return count;
	}

}
