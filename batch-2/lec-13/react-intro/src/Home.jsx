import React from "react";
function Counter(props){

    return <h1>{props.initialValue}</h1>;
}


function MultiCounter(){
   return(
<div>
    <Counter initialValue={10} />
    <Counter initialValue={100} />
    <Counter initialValue={200} ></Counter>
    <Counter initialValue={-10}/>
</div>
   );
}

const Home = () => {
    return<div><MultiCounter/></div>;
};

export default Home;