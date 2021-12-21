//Input: 126
//Output: 2:6
//Input: 45
//Output: 0:45



static string StringChallenge(int num)
{
    string result = "";

    if (num < 60)
    {
        result += "0:" + num.ToString();
    }
    else
    {
        result += num / 60 + ":" + num % 60;
    }
    return result;
}

Console.WriteLine(StringChallenge(45));
