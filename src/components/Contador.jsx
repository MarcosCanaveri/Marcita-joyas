    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }


<div className="products">


                    <p>contador: {count}</p>
                    <button onClick={handleIncrement}>incrementar</button>
                    <button onClick={handleDecrement}>decrementar</button>



                </div>