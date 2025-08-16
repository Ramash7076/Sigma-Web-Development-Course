let a = prompt("Enter the first number")

let b = prompt("Enter the second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}

let sum = parseInt(a) + parseInt(b)

if(isNaN(sum)){
    throw SyntaxError("This is not allowed")
}

function main(){
    
    let x = 1
    try {
        console.log("The sum is ", sum*x)
        return true
        
    } catch (error) {
        console.log('Error aa gaya ');
        return false
        
    }
    
    finally{
        console.log("files are being closed")
    }
}

main()