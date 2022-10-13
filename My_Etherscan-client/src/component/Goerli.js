import { useState } from 'react';

import './Goerli.css';

const axios = require('axios').default;

//1.지갑 주소를 입력하면 잔액이 나오게 완

//2. getTrasactionsByAccount() 구현
//해당계정이 참여한 트랜잭션을 추출
//인자로 account와 블록의 범위값 startBlock, endBlock 총 3가지 인자
//해당범위내 송신, 수신으로 참여한 트랙잭션으로 구성된 배열을 반환

//3. 트랜젝션을 검색 완

//4. 컨트랙트에 대한 정보

//5. 토큰을 전송할수 있는 Transfer 함수를 web3.js를 이용해 구현

//6. 이더스캔 verify publish기능 구현


// useEffect로 account를 모두 불러온다 <- ganache

//GET http://localhost:8080/goerli/balance/?account=0x00

//GET http://localhost:8080/goerli/contract/?account=0x00

//GET http://localhost:8080/goerli/transaction/?transcaction=0x00

function Goerli(props) {

  const [ inputData, handleInputData ] = useState("")
  const [ filter, handleFilter ] = useState(0)
  const [ result, showResult ] = useState("")
  const [ loading, isLoading ] = useState(false)

  function onChangeInputData(e) {
    handleInputData(e.target.value)
  }

  //엔터를 누르면 현재 account 변경
  function handleKeyPress(e) { 
    if (e.type === 'keypress' && e.code === 'Enter') {
      props.changeAccount(inputData);
    }
  }

  //select를 할시 search시 실행되는 함수가 바뀌게
  function onChangeFilter(e) {
    handleFilter(e.target.options.selectedIndex);
  }

  //버튼을 누르면 잔액을 가져옴
  async function onclick() {
    if (props.account === "0x00") {
      return alert("입력후 엔터를 눌러주세요");
    }
   
    if (filter === 0) {
      isLoading(true);
      const balance = await axios.get(`http://localhost:8080/goerli/balance/?account=${props.account}`);
      props.updateBalance(balance.data.balance);
      showResult(`현재 잔액은 ${props.balance} ETH 입니다.`);
      isLoading(false);
    }

    else if (filter === 1) {
      isLoading(true);
      const contract = await axios.get(`http://localhost:8080/goerli/contract/?account=${inputData}`)
      showResult(`${contract.data.result}`);
      isLoading(false);
    }

    else if (filter === 2) {
      isLoading(true);
      const transaction = await axios.get(`http://localhost:8080/goerli/transaction/?transaction=${inputData}`)
      console.log(transaction.data);
      const { 
        blockHash,
        from,
        to,
      } = transaction.data
      showResult(`BlockHash(${blockHash}) ::: From: ${from} To: ${to}`);
      isLoading(false);
    }
  }

  return (
    <div className='Goeril-main'>
      <div className='Goeril-Title'>Welcome Goerli Test Net</div>
      <div>Now Account      ::: {props.account}    </div>
      <div className='Goerli-Input-Area'>
        <select onChange={onChangeFilter}>
          <option>Account</option>
          <option>Contract</option>
          <option>Transaction</option>
        </select>
        <input 
        onChange={onChangeInputData}
        onKeyPress={handleKeyPress}></input>
        <button onClick={onclick}>Search</button>
      </div>
      {loading 
      ? <div> loading.... </div>
      : <div className='Goeril-result'>{result}</div>
      }
    </div>
  );
}

export default Goerli;