//===============E1: return the first element in an array=============

        //-----------------c1------------------------------:
            getFirstValue = (arr) =>{
                return arr[0];
            }
        //-----------------c1------------------------------:




        
        //-----------------c2------------------------------:
            function FirstValue(arr){
                return arr[0];
            }
        //-----------------c2------------------------------:
            
//===============E1: return the first element in an array=============







//===============E2: convert age to days=============

        //-----------------c1------------------------------:
            calcAge = (age) =>{
                return age * 365;
            }
        //-----------------c1------------------------------:





        //-----------------c2------------------------------:
            function calcAge(age){
                return age*365;
            }
        //-----------------c2------------------------------:

//===============E2: convert age to days=============







// ===============E3: Return the next number=============

//         -----------------c1------------------------------:
            addition = (num) =>{
                return num + 1;
            }
//         -----------------c1------------------------------:





//         -----------------c2------------------------------:
            function addition(num){
                return num + 1;
            }
//         -----------------c2------------------------------:

// ===============E3: Return the next number=============







//===============E4: convert minutes to seconds=============

//         -----------------c1------------------------------:
            convertToSeconds = (min) =>{
              return min * 60
            }

//         -----------------c1------------------------------:




//         -----------------c2------------------------------:
            function convertToSeconds(min){
              return min * 60
            }

//         -----------------c2------------------------------:

// ===============E4: convert minutes to seconds=============







//===============E5: Return the sum of two numbers=============

//         -----------------c1------------------------------:
            sum = (num1, num2) =>{
              return num1 + num2
            }

//         -----------------c1------------------------------:





//         -----------------c2------------------------------:
            function sum(num1, num2){
              return num1 + num2
            }

//         -----------------c2------------------------------:

// ===============E5: Return the sum of two numbers=============






//===============E6: Convert Hour & minutes => Seconds =============

//         -----------------c1------------------------------:
            convert = (hours, minutes) =>{
              return (hours * 60 +  minutes) * 60
            }

//         -----------------c1------------------------------:






//         -----------------c2------------------------------:
            function convert(hours, minutes){
               return (hours * 60 +  minutes) * 60
            }

//         -----------------c2------------------------------:

// ===============E6: Convert Hour & minutes => Seconds =============


















//===============E7: Boolean to String Conversion =============

//         -----------------c1------------------------------:
toString  = (boolean) =>{
    return String(boolean)
}
  

//         -----------------c1------------------------------:






//         -----------------c2------------------------------:
  function toString(boolean){
    return String(boolean)
  }

//         -----------------c2------------------------------:

// ===============E7: Boolean to String Conversion =============













//===============E8: Maximum Edge of a Triangle =============

//         -----------------c1------------------------------:
nextEdge  = (side1, side2) =>{
    return side1 + side2 - 1
}
  

//         -----------------c1------------------------------:






//         -----------------c2------------------------------:
  function nextEdge (side1, side2){
    return side1 + side2 - 1
  }

//         -----------------c2------------------------------:

// ===============E8: Maximum Edge of a Triangle =============

















//===============E9: Is the String Empty =============

//         -----------------c1------------------------------:
isEmpty  = (string) =>{
    return string.length > 0 ? false: true
}
  
//         -----------------c1------------------------------:




//         -----------------c2------------------------------:
  function isEmpty (string){
    return string.length > 0 ? false: true
  }

//         -----------------c2------------------------------:

//===============E9: Is the String Empty =============












//===============E10: Compare String by Count of Characters =============

//         -----------------c1------------------------------:
comp = (str1, str2)=>{
    return str1.length === str2.length ? true : false
}
  

//         -----------------c1------------------------------:






//         -----------------c2------------------------------:
  function comp (str1, str2){
    return str1.length === str2.length ? true : false
  }

//         -----------------c2------------------------------:

//===============E10: Compare String by Count of Characters =============