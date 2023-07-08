import { useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
} from "./counterSlice";
import Button from 'react-bootstrap/Button';
const Counter = () => {
    const dispatch = useDispatch();
    return (
        <div className ="d-flex justify-content-center">

            <Button
                aria-label="Increment value"
                onClick={() => {
                    dispatch(increment());
                }}
                variant="success"
                className ='mx-2 buttonDisabled'
            >
                Increase
            </Button>

            <Button
                className ="button mx-2 buttonDisabled"
                aria-label="Decrement value"
                onClick={() => {
                    dispatch(decrement());
                }}
                variant="danger"
            >
                Decrease
            </Button>

            <Button
                className ="button mx-2 buttonDisabled"
                aria-label="Decrement value"
                onClick={() => {
                    dispatch(incrementByAmount(10));
                }}
                variant="success"
            >
                IncrementBy 10
            </Button>

            <Button
                aria-label="Decrement value"
                onClick={() => {
                    dispatch(decrementByAmount(10));
                }}
                variant="danger"
                className ="button mx-2"
            >
                DecrementBy 10
            </Button>
        </div>
    );
};
export default Counter;