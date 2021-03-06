import React, { useState } from 'react'
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Tab from "../elements/Tab";

// assets
import Hodu from "../assets/images/Logo-hodu15.png";

function Login() {
    const [tab, setTab] = useState(0)
    const [id, setId] = useState("")
    const [pw, setPw] = useState("")

    const [idMessage, setIdMessage] = useState("")
    const [pwMessage, setPwMessage] = useState("")
    const [salesIdMessage, setSalesIdMessage] = useState("")
    const [salesPwMessage, setSalesPwMessage] = useState("")

    const handleLogin = () => {
        if (tab === 0) {
            if (id === "") {
                setIdMessage("아이디를 입력해주세요")
            }
            if (pw === "") {
                setPwMessage("비밀번호를 입력해주세요")
            }
        } else if (tab === 1) {
            if (id === "") {
                setSalesIdMessage("아이디를 입력해주세요")
            }
            if (pw === "") {
                setSalesPwMessage("비밀번호를 입력해주세요")
            }
        }
    }
    return (
        <LoginSection>
            <h1 style={{ marginBottom: "70px" }}>
                <img src={Hodu} alt="" />
            </h1>
            <Tab tab={tab} setTab={setTab} children="판매로그인" children2="구매로그인" />
            <LoginForm>
                {tab === 0 &&
                    <ul className='login-wrap'>
                        <Input placeholder="아이디" height="44px" padding="none" border="none" radius="none" borderBottom="1px solid #c4c4c4" borderColor="transparent" _onChange={(e) => setId(e.target.value)} />
                        {id.length >= 0 && (
                            <>
                                <Message>
                                    {idMessage}
                                </Message>
                            </>
                        )}
                        <Input placeholder="비밀번호" height="44px" padding="none" border="none" radius="none" borderBottom="1px solid #c4c4c4" borderColor="transparent" _onChange={(e) => setPw(e.target.value)} />
                        {pw.length >= 0 && (
                            <>
                                <Message >
                                    {pwMessage}
                                </Message>
                            </>
                        )}
                        <Button height="50px" margin="52px 0 0" font_size="16px" font_weight="bold" _onClick={handleLogin}>로그인</Button>
                    </ul>
                }
                {tab === 1 &&
                    <ul className='sales-login_wrap'>
                        <Input placeholder="아이디" height="44px" padding="none" border="none" radius="none" borderBottom="1px solid #c4c4c4" borderColor="transparent" _onChange={(e) => setId(e.target.value)} />
                        {id.length >= 0 && (
                            <>
                                <Message>
                                    {salesIdMessage}
                                </Message>
                            </>
                        )}
                        <Input placeholder="비밀번호" height="44px" padding="none" border="none" radius="none" borderBottom="1px solid #c4c4c4" borderColor="transparent" _onChange={(e) => setPw(e.target.value)} />
                        {pw.length >= 0 && (
                            <>
                                <Message>
                                    {salesPwMessage}
                                </Message>
                            </>
                        )}
                        <Button height="50px" margin="52px 0 0" font_size="16px" font_weight="bold" _onClick={handleLogin}>로그인</Button>
                    </ul>
                }
            </LoginForm>
        </LoginSection>
    )
}

const LoginSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`

const LoginForm = styled.div`
  width: 440px;
  box-sizing: border-box;
  border: 1px solid #C4C4C4;
  border-top: none;
  .login-wrap {
    padding: 34px 35px 36px;
  }
  .sales-login_wrap {
    padding: 34px 35px 36px;
  }
`

const Message = styled.p`
  font-size: 13px;
  align-self: flex-start;
  margin-top: 10px;
  color: ${(props) => (props.className === "success" ? "#21BF48" : "#EB5757;")}
`

export default Login