let a = [3, 4, 2, 56, 56, 56, 4, 3, 56]

function double(){
    let arr = a.map((num, i)=>{
        return (i>0 && num == a[i-1]) ? num : num * 2
    })
    console.log(arr)
}

double()
