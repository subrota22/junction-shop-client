import { useSelector } from 'react-redux';
const Coin = () => {
    const { coin } = useSelector((state) => state.counter);
  
    return (
        <div style={{ paddingTop: '10px', textAlign: "center" }}>
            <b><big className ="value text-white">Coins: {coin} </big></b>
            <hr/>
            {coin > 100 &&  < p className ='alert alert-danger'> Please select numbers less than 100 !!</p>}
            {coin < 0 &&  < p className ='alert alert-danger'> Please select numbers  from 1  !!</p>}
        </div>

    );
  
};

export default Coin;