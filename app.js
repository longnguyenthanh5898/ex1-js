//===============E1: return the first element in an array=============

        //-----------------c1------------------------------:
        checkValue = (arr) =>{
          let isNumber = (num) => typeof num === 'number'
          return arr.every(isNumber)
        } 
        getFirstValue = (arr) =>{
          if(checkValue(arr)){
            return arr[0];
          } else{
            return "Error";
          }
        }
        //-----------------c1------------------------------:


        //-----------------c2------------------------------:
        checkValue = (arr) =>{
          let isNumber = (num) => typeof num === 'number'
          return arr.every(isNumber)
        } 
        getFirstValue = (arr) =>{
                      if(checkValue(arr)){
                        return arr.splice(0, 1);
                      } else{
                        return "Error";
                      }
                    }        
        //-----------------c2------------------------------:
            
//===============E1: return the first element in an array=============




//===============E2: convert age to days=============

        //-----------------c1------------------------------:
            calcAge = (age) =>{
              if(age > 0 && Number.isInteger(age) || age === 0){
                return age * 365;
              } else{
                return "error"
              }
               
            }
        //-----------------c1------------------------------:


        //-----------------c2------------------------------:
           
        //-----------------c2------------------------------:

//===============E2: convert age to days=============







// ===============E3: Return the next number=============

//         -----------------c1------------------------------:
              addition = (num) =>{
                if(Number.isInteger(num)){
                      return num + 1;
                }
                else{
                  return "error"
                }

              }
//         -----------------c1------------------------------:





//         -----------------c2------------------------------:
         
//         -----------------c2------------------------------:

// ===============E3: Return the next number=============





//===============E4: convert minutes to seconds=============

//         -----------------c1------------------------------:
            convertToSeconds = (min) =>{
              if(Number.isInteger(min) && min > 0 || min === 0){
                return min * 60
              } else{
                return "Error"
              }
             
            }

//         -----------------c1------------------------------:


//         -----------------c2------------------------------:
         
//         -----------------c2------------------------------:

// ===============E4: convert minutes to seconds=============







//===============E5: Return the sum of two numbers=============

//         -----------------c1------------------------------:
            sum = (num1, num2) =>{
            if(typeof num1 === 'number' && typeof num2 === 'number'){
                return num1 + num2
            } else{
              return "Error"
            }
          }
//         -----------------c1------------------------------:





//         -----------------c2------------------------------:
            sum = (num1, num2) =>{
              if(typeof num1 === 'number' && typeof num2 === 'number'){
                  let arr = [num1, num2]
  
                  return arr.reduce((num1, num2) => num1 + num2, 0)
                  
              } else{
                return "Error"
              }
            }

//         -----------------c2------------------------------:

// ===============E5: Return the sum of two numbers=============






//===============E6: Convert Hour & minutes => Seconds =============

//         -----------------c1------------------------------:
            convert = (hours, minutes) =>{
              if(Number.isInteger(hours) && Number.isInteger(minutes) && hours > -1 && minutes > -1){
                return (hours * 60 +  minutes) * 60
              }
              else{
                return "Error"
              }
            }

//         -----------------c1------------------------------:






//         -----------------c2------------------------------:
           

//         -----------------c2------------------------------:

// ===============E6: Convert Hour & minutes => Seconds =============






//===============E7: Boolean to String Conversion =============

//         -----------------c1------------------------------:
            toString  = (boolean) =>{
              if(boolean === true || boolean === false){
                return String(boolean)

              } else{
                return "Error"
              }
            }
  

//         -----------------c1------------------------------:




//         -----------------c2------------------------------:
            toString  = (boolean) =>{
              if(boolean === true || boolean === false){
                return '' + boolean

              } else{
                return "Error"
              }
            }
//         -----------------c2------------------------------:

// ===============E7: Boolean to String Conversion =============













//===============E8: Maximum Edge of a Triangle =============

//         -----------------c1------------------------------:
            nextEdge  = (side1, side2) =>{
              if(Number.isInteger(side1) && Number.isInteger(side2) && side1 > 0 && side2 > 0){
                return side1 + side2 - 1
              } else{
                return "Error"
              }
            }
  

//         -----------------c1------------------------------:






//         -----------------c2------------------------------:
  

//         -----------------c2------------------------------:

// ===============E8: Maximum Edge of a Triangle =============






//===============E9: Is the String Empty =============

//         -----------------c1------------------------------:
            isEmpty  = (string) =>{
              if(typeof string === 'string'){
                  return string.length > 0 ? false: true
              }
              else {
                return "Error"
              } 
            }
  
//         -----------------c1------------------------------:




//         -----------------c2------------------------------:
            isEmpty  = (string) =>{
              if(typeof string === 'string' && string !== ''){
                  return true
              }
              else {
                return false
              } 
            }
//         -----------------c2------------------------------:

//===============E9: Is the String Empty =============












//===============E10: Compare String by Count of Characters =============

//         -----------------c1------------------------------:
            comp = (str1, str2)=>{
              if(typeof str1 === 'string' && typeof str2 === 'string'){
                return str1.length === str2.length ? true : false
              } else{

              }
            }

//         -----------------c1------------------------------:




//         -----------------c2------------------------------:
            strLength = (str) =>{
              let count = 0
              while(str[count] !== undefined){
                count++
              }
              return count
            }

            comp = (str1, str2)=>{
              if(typeof str1 === 'string' && typeof str2 === 'string'){
                return strLength(str1) === strLength(str2) ? true : false
              } else{
                return "error"
              }
            }
//         -----------------c2------------------------------:

//===============E10: Compare String by Count of Characters =============