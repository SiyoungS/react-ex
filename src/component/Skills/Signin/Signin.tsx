import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import style from './Signin.module.scss'
// import { Button, Col, Input, Row } from "antd";
// import Greetings from '../Greetings/Greetings'
// import Counter from '../../Counter/Counter';
// import MyForm from "../../MyForm/MyForm";

class Signin extends React.Component {
  
 
  // constructor(props:any){
  //   super(props)

  //   const [isInput, setInput] = useState<string>('')
  // }
  //로그인 api를 칠수있도록 작업
  // const emailRef =useRef<Input>();
  // const passwordRef =useRef<Input>();
  //Script 공간
  eventButton = () => {
    // alert(document.getElementById('idGab'))
    document.getElementById('inputID')?.setAttribute('hidden','true')
    document.getElementById('inputPW')?.setAttribute('hidden','true')
    document.getElementById('evtBtn')?.setAttribute('hidden','true')
  }

  render(){
    // const { isInput } = this.state;
    return (
      <div className={style.container}>
          {/* <Greetings name="Hello" onClick={onClick} />//함수형 컴포넌트를 타입스크립트로 작성하는 기본적인 방법
          <Counter /> //useState를 사용한 이벤트 관리
        <MyForm onSubmit={onSubmit} />//인풋 상태관리하기 */}
        <p className={style.test}>HAPPY HOLIDAY(signin.tsx)</p>
        <div className={style.login} id='inputID'>
          <div style={{'flex':1,'textAlign':'end','marginRight':'10px'}}>
          아이디
          </div>
          <div style={{'flex':1}}>
            <input
              id="idGab"
              className={style.input}
              placeholder='ID'
              type="text"
            // defaultValue={isInput}
              />
          </div>
        </div>
        <div className={style.login} id='inputPW'>
          <div style={{'flex':1,'textAlign':'end','marginRight':'10px'}}>
              비밀번호
              </div>
              <div style={{'flex':1}}>
                <input
                  className={style.input}
                  type="password"
                  placeholder='password'
                  defaultValue=""
                  />
          </div>
        </div>
        {/* <p>{isInput}</p> */}
        <button type="button" className={style.button}
        id='evtBtn'
        onClick={this.eventButton}
        >로그인</button>
      </div>
    );
  }
}


export default Signin;