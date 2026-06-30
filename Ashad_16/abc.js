// const numerrator = 10, denominator = 'a';
// try{
//     console.log(numerrator / denominator);

//     console.log(a);
    
// }
// catch(err){
//     console.log('Error:', err.message);
// }

// finally{
//     console.log('Finally block executed');
// }


// try{
//     setTimeout(function(){
//         console.log('Inside setTimeout');
    
//     }, 1000);
// }
//     catch(err){
//         console.log('Error:', err.message);
//     }

// throw 
const num = 10;
try{
    if(num > 5){
        console.log('sucess');
    }
    else{
        throw new Error('Number is less than 15');
    }
    console.log('End of try block');
}
catch(err){
    console.log('Error:', err.message);
}
