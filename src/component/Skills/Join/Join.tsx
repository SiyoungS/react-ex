import { userInfo } from 'os';
import React, { Component } from 'react';
import styles from './Join.module.scss';
class Join extends Component{

  // id password state 값 정의
  state ={
    input :{
      id: '',
      password:'',
      checkPW:'',
      userName:'',
      userBirth:'',
    },
    userInfo:{
      id:'',
      password:'',
      userName:'',
      userBirth:'',
    },
    flag:{
      passwordCheckFlag:false,
      signupCheckFlag:false,
    }
  }
  //인풋 아이디 받기 - 인풋 change event
   inputIDChange=(e:any)=>{
     this.setState({
       input:{
          id:e.target.value,
          password:this.state.input.password,
          checkPW:this.state.input.checkPW,
          userBirth:this.state.input.userBirth,
          userName:this.state.input.userName
        }
     })
   } 

   //인풋 비번 받기 - 인풋 change event
   inputPWChange= (e:any) => {
     this.setState({
       input:{
          id:this.state.input.id,
          password:e.target.value,
          checkPW:this.state.input.checkPW,
          userBirth:this.state.input.userBirth,
          userName:this.state.input.userName
        }
     })
   }
   inputPWCheckChange= (e:any) => {
    this.setState({
      input:{
         id:this.state.input.id,
         password:this.state.input.password,
         checkPW:e.target.value,
         userBirth:this.state.input.userBirth,
         userName:this.state.input.userName
       }
    },()=>{
      const pwLen = this.state.input.password.length
      const checkPwLen = this.state.input.checkPW.length
      if (pwLen === checkPwLen ) {
        this.overPWCheck(this.state.input.password,this.state.input.checkPW)
      }
    })
  }
  //비번 중복확인
  overPWCheck = (inputPW?:string, inputPWCheck?:string) => {
    // console.log("들어오는 값 확인 ::"+ )
    // console.log("들어오는 값 확인 ::"+ inputPWCheck)
    if (inputPW !==inputPWCheck) {
      alert("비번 두개 다르다.")
      this.setState({
        flag:{
          passwordCheckFlag:false,
        }
      })
    } else {
      //password check true
      this.setState({
        flag:{
          passwordCheckFlag:true,
        }
      })
    }
  }
  //이름 받기
  inputName=(e:any)=>{
    this.setState({
      input:{
        id:this.state.input.id,
        password:this.state.input.password,
        checkPW:this.state.input.checkPW,
        userBirth:this.state.input.userBirth,
        userName:e.target.value,
      }
    })
  }
  //생년월일 받기
  userBirth = (e:any) => {
    this.setState({
      input:{
        id:this.state.input.id,
        password:this.state.input.password,
        checkPW:this.state.input.checkPW,
        userBrith:e.target.value,
        userName:this.state.input.userName,
      }
    })
  }

  //회원가입 버튼 클릭
  joinUser=()=>{
    console.log("인풋값 ::: ", this.state.input);
    //나중에 입풋값들 유효성 체크
    if (!this.state.flag.signupCheckFlag) {
      alert('입력값을 전부 입력해주세요')
      return false;
    } else {
      this.setState({
        userInfo:{
          id:this.state.input.id,
          password:this.state.input.password,
          userBirth:this.state.input.userBirth,
          userName:this.state.input.userName,
        },
        input:{id:'',password:''} //초기화
      }, ()=> {
        //setState는 함수의 가장 마지막에서만 사용할것 -> 나중에 찾아봐 마지막에 쓰는 이유
        console.log("유저인포 :::"+ this.state.userInfo.id + this.state.userInfo.password 
              +this.state.userInfo.userName+ this.state.userInfo.userBirth);
      })
    }
  }
  

  render(){
    const {userInfo, input, flag} = this.state;
    return(
      <form action="">
        <div className={styles.container}>
          <div className={styles.title}>
          <h1>회원가입</h1>    
          </div>
          <div className={styles.form}>
            <div className={styles.input_box}>
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" placeholder="아이디임"
                  defaultValue={input.id} onChange={this.inputIDChange} />
            </div>   
            <div className={styles.input_box}>
              <label htmlFor="">비밀번호</label>
              <input type="password" placeholder="비번임" id="password"
                  defaultValue={input.password} onChange={this.inputPWChange}/>  
            </div>   
            <div className={styles.input_box}>
              <label htmlFor=""></label>
              <input type="password" placeholder="한번 더 입력하자"
              onChange={this.inputPWCheckChange}
                  defaultValue={input.checkPW} />  
              <div>
                <span style={{color:flag.passwordCheckFlag?'green':'red'}}>
                {flag.passwordCheckFlag?'확인되었습니다':'비번 확인해주세요'}
                </span>    
              </div>
            </div>   
            <div className={styles.input_box}>
              <label htmlFor="">이름</label>
              <input type="text" placeholder="이름" id="userName"
                  defaultValue={input.userName} onChange={this.inputName}/>  
            </div>   
            <div className={styles.input_box}>
              <label htmlFor="">생년월일</label>
              <input type="date" id="userBirth"
                 defaultValue={input.userBirth}/>  
            </div>   
            <button type="button" className={styles.join_button}
                onClick={this.joinUser}>회원가입 완료</button>
          </div>
          {/* { userInfo.id &&
          <h2>{userInfo.id}님 환영합니다.</h2> } */}
        </div>
      </form>
    );
  }
}

export default Join;