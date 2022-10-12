import { useState } from 'react';

import './Main.css';

const axios = require('axios')

//1.지갑 주소를 입력하면 잔액이 나오게

//2. getTrasactionsByAccount() 구현
//해당계정이 참여한 트랜잭션을 추출
//인자로 account와 블록의 범위값 startBlock, endBlock 총 3가지 인자
//해당범위내 송신, 수신으로 참여한 트랙잭션으로 구성된 배열을 반환

//3. 트랜젝션을 검색

//4. 컨트랙트에 대한 정보

//5. 토큰을 전송할수 있는 Transfer 함수를 web3.js를 이용해 구현

//6. 이더스캔 verify publish기능 구현


// useEffect로 account를 모두 불러온다


function Main(props) {

  const [ inputData, handleInputData ] = useState("")

  function onChangeInputData(event) {
    handleInputData(event.target.value)
  }

  //엔터를 누르면 현재 account 변경
  const handleKeyPress = (e) => { 
    if (e.type === 'keypress' && e.code === 'Enter') {
      props.changeAccount(inputData)
    }
  }

  //버튼을 누르면 잔액을 가져옴
  async function onclick() {
    console.log("fetch")
    const balance = axios.get(`/blance?account=${props.account}`)
    props.updateBalance(balance)
  }

  return (
    <div className='main'>
      <div>Now Account      ::: {props.account}    </div>
      <div>now your Balace  ::: {props.balance} ETH</div>
      <input 
      onChange={onChangeInputData}
      onKeyPress={handleKeyPress}></input>
      <button onClick={onclick}>Search</button>
    </div>
  );
}

export default Main;