//most repeated number
function SimpleMode(arr){
    var mode=0;
    var count2=0;
    for(var i=0; i<arr.length; i++){
        var count=0;
        for(var j=0; j<arr.length; j++){
            if(arr[i] == arr[j] && j!==i){
                count++;
            }
            if(count>count2){
                mode = arr[i];
                count2 = count;
                count =0;
            }
        }
    }
    if(count2==0){
        return -1;
        }
    return mode;
    }

    console.log(SimpleMode([5,1,1,1,5,2,2,2,1]));