
    //Create a function that will get the sum of the numbers between 1 and n and return the answer

    const summation = function(number)
    {
 	    let sum=0;
	    for( let i=1; i<=number; i++)
		    sum+=i;
        console.log("The Summation of "+number+" is "+sum);
	
    }  
    //summation(5) >> Output : "The Summation of 5 is 15"

///////////////////////////////////////////////////////////////////////////////

    //Create a program to get the sum of all the even numbers in a group
    
    const summationEven = function(number)
    {
 	    let sum=0;
	    for( let i=1; i<=number; i++)
		    if(i%2==0)
				sum+=i;
        console.log("The Even Summation of "+number+" is "+sum);
	
    }  
    //summationEven(5) >> Output : "The Even Summation of 5 is 6"
 
///////////////////////////////////////////////////////////////////////////////

    //Create a function to get the average of a group of numbers

    const avg = function (arrayofValues)
    {
	    let sum = 0 , avg = 0;
	    for(let i = 0; i < arrayofValues.length; i++)
		    {
			    sum+=arrayofValues[i];
		    }
	    avg = sum / arrayofValues.length;
	    return avg;
    }
    // should return 4 >> avg([8, 2, 2, 4]) >> Output : 4
 
///////////////////////////////////////////////////////////////////////////////

    //Create a function to reverse the letters in a word
    
    const reverseString1 = function (wordToReverse)
    {
	    let lastChar = wordToReverse.length;
	    let reversedStr ="";
	    for( let i = lastChar; i>=0 ; i--) 
		    {
  			    reversedStr+=wordToReverse.charAt(i);
		    }
	    return reversedStr;
    }
       
    // reverse("caterpillar") returns "rallipretac"

///////////////////////////////////////////////////////////////////////////////

    //Create a function that takes an array of words and combines them with a dash
    
    const addDashes = function (arrayToDash)
    {
	
	    let dashStr ="";
	    let lastChar = arrayToDash.pop();
	    for( let i = 0; i<arrayToDash.length ; i++) 
		    {
  			    dashStr+=arrayToDash[i]+"-";
		    }
	    return dashStr+lastChar;
    }
        
    // addDashes(['test1', 'test2', 'test3']) returns "test1-test2-test3

///////////////////////////////////////////////////////////////////////////////

    //Function that will count up to a number and back down and return a string of the climb
    const countUpAndDown = function (numberClimb)
    {
	
	    let climbedStr ="";
	    for( let i = 0; i<numberClimb ; i++) 
		    {
  			    climbedStr+=(i+1)+" ";
		    }
		for( let i = (numberClimb -1); i>0 ; i--) 
		    {
  			    climbedStr+=" "+i;
		    }
		
	    return climbedStr;
    }
   
    // countUpAndDown(3) returns "1 2 3 2 1"
    
    //Write a function that will tell you all of the words in an array that contain the letter `a`

///////////////////////////////////////////////////////////////////////////////    
    const wordsWithA= function (arrayOfValues)
    {
        let str = [];
        for ( let i =0 ; i <arrayOfValues.length ; i++) 
        {
            if(arrayOfValues[i].search('a')>0)
                str[i]=arrayOfValues[i]; 
        }
        str = str.filter(function( element ) {return element !== undefined;});
        // to clean undefined data from Array
    console.log(str);
    }
    
    // wordsWithA(['cat', 'rabbit', 'dog', 'frog']) returns ['cat', 'rabbit']

///////////////////////////////////////////////////////////////////////////////    
    
    //Write a function that will tell you all of the words in an array that contain a specified letter
    
    const wordsWithLetter= function (letterToSearch , arrayOfValues)
    {
        let str = [];
        for ( let i =0 ; i <arrayOfValues.length ; i++) 
        {
            if(arrayOfValues[i].search(letterToSearch)>0)
                str[i]=arrayOfValues[i]; 
        }
        str = str.filter(function( element ) {return element !== undefined;});
        // to clean undefined data from Array
    console.log(str);
    }
    
    
    
    // wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) returns ['dog', 'frog']

///////////////////////////////////////////////////////////////////////////////    
    
    //Function that returns the longest word in sentence
    
    const longestWord = function (stringOfWord)
    {
        let tempVal = 0, maxVal =0 , longestString ="";
        let arrayOfString = stringOfWord.split(" ");
        let arrayOfStringLength =stringOfWord.split(" ").length;
    
        for ( let i = 0; i < arrayOfStringLength ; i++)
            {
                tempVal = arrayOfString[i].length;
                if(tempVal>maxVal) 
                { 
                    maxVal =tempVal; 
                    longestString=arrayOfString[i];
                }
            }
        console.log(" "+longestString+" ");
    }
   
    
    //  longestWord("The cat in the house") returns "house"

///////////////////////////////////////////////////////////////////////////////    

    //Function that returns the largest even number
    const largestEvenNumber = function (largeN)
    {
        let tempVal = 0, maxVal =0;
        for ( let i = 0; i < largeN.length ; i++)
            {
                tempVal = largeN[i];
                if(tempVal>maxVal) 
                { 
                    maxVal =tempVal;
                }
            }
        console.log(" "+maxVal+" ");
    }
    
// largestEvenNumber([1,2,3,10,4,7,0]) returns "10"

// Extra Practice Part One 
    const wordLetters       = ['G', 'O', 'A', 'T'];
    const guessedLetters    = ['_', '_', '_', '_'];
    const guessLetter2322  = function (letter)
            {
                let flagGame  = 0;
                for(let i = 0 ; i < wordLetters.length ; i ++)
                    {
                        if(wordLetters[i]==letter&&guessedLetters[i]=='_')
                           {
                                guessedLetters[i]= wordLetters[i];
                                flagGame =1;
                                     
                            }
                        else falgGame = 0;
                        
                    }
    
                if((guessedLetters.includes('_'))&&flagGame==1)
         
                    console.log("Correct, "+guessedLetters);
    
                else if(guessedLetters.includes(letter)&&flagGame==0) 
            
                    console.log("You Already Guessed This, "+guessedLetters);  
            
                else if(!wordLetters.includes(letter))
         
                    console.log("Incorrect, "+guessedLetters);
    
                else if(wordLetters.includes(letter)&&!wordLetters.includes('_')) 
            
                    console.log("You Win, "+guessedLetters);
            }

    