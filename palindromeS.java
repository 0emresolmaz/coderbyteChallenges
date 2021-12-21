package palindrome;

public class palindromeS {

	public static void main(String[] args) {
		System.out.print(StringChallenge("never odd or even"));
		

	}
	
	public static boolean StringChallenge(String str) {
		
	    String noSpace = str.replace(" ", ""); 
	    String result ="";
	    for (int i=noSpace.length()-1 ; i>=0;i--)
	    {
	    	result+= noSpace.charAt(i);
	    }
	    if (noSpace.matches(result))
	    {
	    	 return true;
	    }
	    return false;
	   
	  }

}
