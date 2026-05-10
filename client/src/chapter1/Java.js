function Java()
{
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits);

const price = [20, 100, 50];
const result = price.filter((price) => price > 60);
console.log(result);
price.unshift(5,10);
console.log(price);
price.shift()
console.log(price);
    return(
        <div>
            <h2>Javascript Functions</h2>
            {fruits}

            {
                fruits.map((f,i)=>
                <p>{i}-{f}</p>)
            }
            {price}
            <br>
            </br>
            {result}
        </div>
    );
}
export default Java;