const a = ["aaa","oop"];
function rv(str)
{
    let rv_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
      rv_str += str[i];
    }
    return rv_str;
}
for (let str of a)
{
    if (rv(str) === str)
    {
        console.log(str+": True");
    }
    else
    {
        console.log(str+": False");
    }
}