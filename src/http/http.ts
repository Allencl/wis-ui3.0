




export const httpHandle=async (option:Object)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({a:1,b:2})
        },3000)
    })
}