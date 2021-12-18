function VowelCount(str) { 

    let vovels = ["a","e","i","o","u"] 
    let count =0

    for (let i = 0; i < str.length; i++) {
        if(vovels.includes(str[i]))
        {
            count++;
        }
            
    }

    return count; 
  
  }
     
  // keep this function call here 
  console.log(VowelCount("hello"))