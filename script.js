function foo(){
    let rest=document.getElementById(" rest ").value;
    console.log(rest);
    async function foo1(){
        let data=await fetch(`https://developers.google.com/gmail/api/reference/rest/${rest}`);
        let result=await data.json();
        console.log(result);
        for(var i in result){
console.log(`${rest}:${result[i]}`);
        }
    }
}
foo1();