function Functions()
{

    const A = [1,2,3];
    function Array(ele)
    {
        A.push(ele);
    }
    function Array1(a,ele)
    {
        const nA= [...A,ele];
        return nA;
    }
    
    return(
        <div>
            Function :{Array1(A,10)}<br></br>
            Original Array:{A}<br></br>
        </div>
    )
}
export default Functions;