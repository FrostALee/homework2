import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createHomeworkMW , loadHomeworkMW} from './redux/modules/hw'


function Add() {

    const history = useHistory();
    const dispatch = useDispatch();

    const textA = React.useRef(null);
    const textB = React.useRef(null);
    const textC = React.useRef(null);
    const textD = React.useRef(null);
    const textE = React.useRef(null);

    const addtext = () => {
        dispatch(createHomeworkMW({
                    sub1: textA.current.value,
                    sub2: textB.current.value,
                    sub3: textC.current.value,
                    sub4: textD.current.value,
                    sub5: textE.current.value,
                }))
        history.push('/')
    }

    function AddCard(){
        return(
            <div className="Add_wrap">
            <div className="Add_title_wrap">
                <p className="Add_title">단어 추가하기</p>
            </div>
            <div className="Add_box_wrap">
                <div  style={{marginTop: "30px"}}>
                    <div>
                        <div style={{marginBottom: "5px"}}>
                            <span className="Add_title_text">단어</span>
                        </div>
                        <div>
                            <input type="text" ref={textA} className="Add_input"></input>
                            <hr/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">병음</span>
                        </div>
                        <div>
                            <input type="text" ref={textB} className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">의미</span>
                        </div>
                        <div>
                            <input type="text" ref={textC} className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">예문</span>
                        </div>
                        <div>
                            <input type="text" ref={textD} className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">해석</span>
                        </div>
                        <div>
                            <input type="text" ref={textE} className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                <div className="buttonBox">
                    <button className="save_button" onClick={addtext}> 저장하기 </button>
                </div>
                </div>
            </div>
        </div>
        )
    }

    return(
    <div>
        <AddCard/>
    </div>
    )
}

export default Add;