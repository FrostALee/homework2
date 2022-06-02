import React from "react";
import './App.css';
import "./font.css";

import Homework2 from './Homework2'
import AddPage from './AddPage'
import FixPage from './FixPage'

import plus from './img/plus-solid.svg'

import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { loadHomeworkMW } from './redux/modules/hw'
import { useDispatch } from "react-redux";
import {db} from './firebase'
import {collection, addDoc, getDocs} from 'firebase/firestore'
import { async } from "@firebase/util";


function App() {
  const history = useHistory();
  const dispatch = useDispatch();


  // 파이어 스토어에서 받아오는 데이터들을 
  // 메인에 표시해 달라는 디스패치 요청
  React.useEffect(() => {
    dispatch(loadHomeworkMW())
    
  })

  // React.useEffect(async() => {
  //   console.log(db)
  //   const query = await getDocs(collection(db, 'homework'))
  //   console.log(query)
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data())
  //   })
  // }, [])

  return (
    <div>
      <div className="Wrap">
        <div className="Header">
          <p className="headtitle">나만의사전</p>
          <hr style={{ width: "90%" }} />
        </div>
        <div className="Body">
          <Route path="/" exact>
            <Homework2 />
          </Route>
          <Route path="/add" exact>
            <AddPage />
          </Route>
          <Route path="/fix" exact>
            <FixPage />
          </Route>
        </div>
        <div className="Add_button" onClick={() => { history.push(`/add`); }}>
          <img src={plus} className="plus_icon" />
        </div>
      </div>
    </div>
  );
}

export default App;