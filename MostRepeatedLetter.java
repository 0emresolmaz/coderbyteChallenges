package word;

import java.util.ArrayList;
import java.util.Collections;

public class charCount {

	public static void main(String[] args) {
		System.out.print(Collections.max(StringChallenge("Never eat shredded wheat or cake")));

	}

	public static ArrayList<Integer> StringChallenge(String str) {

		ArrayList<Integer> list = new ArrayList<>();

		String[] myArray = str.split("");
		
		for(int i =0;i<myArray.length;i++)
		{
			String array1 = str.replaceAll(myArray[i], "");
			int count = str.length()- array1.length();
			
			list.add(count);
		}

		return list;

	}

}

