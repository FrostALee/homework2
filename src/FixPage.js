import React from "react";
import {Route} from "react-router-dom"



function Fix(props) {

    // const addCard = () => {
    //     setCount(count + 1);
    // };

    return(
    <div>
        <div className="Add_wrap">
            <div className="Add_title_wrap">
                <p className="Add_title">단어 수정하기</p>
            </div>
            <div className="Add_box_wrap">
                <div  style={{marginTop: "30px"}}>
                    <div>
                        <div style={{marginBottom: "5px"}}>
                            <span className="Add_title_text">단어</span>
                        </div>
                        <div>
                            <input className="Add_input"></input>
                            <hr/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">병음</span>
                        </div>
                        <div>
                            <input className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">의미</span>
                        </div>
                        <div>
                            <input className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">예문</span>
                        </div>
                        <div>
                            <input className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                    <div style={{marginTop: "30px"}}>
                        <div>
                            <span className="Add_title_text">해석</span>
                        </div>
                        <div>
                            <input className="Add_input"></input>
                            <hr style={{}}/>
                        </div>
                    </div>
                <div style={{marginTop: "55px", textAlign: "center"}}>
                    <button className="save_button"> 저장하기 </button>
                </div>
                </div>
            </div>
        </div>    
    </div>
    )
}

export default Fix;