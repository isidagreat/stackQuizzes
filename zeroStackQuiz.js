function fizzbuzz(x){
	for(i=1; i<=x;i++){
		if(i%15 ===0){
			console.log("FizzBuzz");
		}
		else if(i%3===0){
			console.log("Fizz")
		}
		else if(i%5===0){
			console.log("Buzz")
		}
		else{
			console.log(i);
		}
	}
}
fizzbuzz(20);

var theArr=[1,2,3];

function insertAt(arr, idx, n){
	if(idx>arr.length){
		arr.length=idx-1;
		arr[idx] = n;
		console.log("printed first"+arr);
	}
	else if(idx <0){
		console.log(arr);
	}
	else if(idx<arr.length){
		arr.length+=1;
		for(var i =arr.length-1; i>idx;i--){
			arr[i]=arr[i-1];
		}
		arr[idx]=n;
		console.log("printed last"+arr);
	}

}
insertAt(theArr, 5, 7);