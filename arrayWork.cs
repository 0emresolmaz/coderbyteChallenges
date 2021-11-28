// See https://aka.ms/new-console-template for more information


using System.Collections;
using System.Text.RegularExpressions;

ArrayList list1 = new ArrayList();
ArrayList list2 = new ArrayList();

string FunctionalResult(string[] array)
{
    string[] a = Regex.Split(array[0], @"\D+");
    string[] b = Regex.Split(array[1], @"\D+");

    foreach (string item in a)
    {
        int number;
        if (int.TryParse(item, out number))
        {
            list1.Add(item);
        }
    }

    foreach (string item in b)
    {
        int number;
        if (int.TryParse(item, out number))
        {
            list2.Add(item);
        }
    }
    string result = "";
    int length = list1.Count < list2.Count ? list1.Count : list2.Count;

    for (int i = 0; i < length; i++)
    {
        result += Convert.ToInt32(list1[i]) + Convert.ToInt32(list2[i])+"-";
    }

    for (int i = 0; i < Math.Abs(list1.Count - list2.Count); i++)
    {
        if (list1.Count > list2.Count)
        {
            result += (list1[list2.Count + i]) + "-";
        }

        else if (list1.Count < list2.Count)
        {
            result += (list2[list1.Count + i]) + "-";
        }
        else if (list1.Count == list2.Count)
        {
            result += (list1[list2.Count]);
        }

    }
    return result.Remove(result.Length-1);
}

Console.WriteLine(FunctionalResult(new string[] { "[1,1,2,3,3,4,5,6,]", "[2, 1, 5, 2]" }));
