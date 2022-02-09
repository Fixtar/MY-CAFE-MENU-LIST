import React, { useEffect, useState } from "react";

//Hook 사용

function Counter() {
    //count라는 state이름, setCount라는 state값을 업데이트하는 함수, 초기값 0 
    const [count, setCount] = useState(0);

    //매 랜더링 이후에 실행한다.
    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    });

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Counter;