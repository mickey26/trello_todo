import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

const PAGECONTAINER = styled.div``;


function LandingPage() {
  const [addListState, setAddListState] = useState(false);
  const [l1, setL1] = useState([]);
  const [tileTitle, setTileTitle] = useState('');
  const [tileText, setTileText] = useState('');
  const [listName, setListName] = useState('');
  const [inputState, setInputState] = useState(false);
  const componentListState = useSelector(state => state.LandingReducers.componentList);
  const dispatch = useDispatch();

  const handleListInsert = () => {
    let obj = {
      title: listName,
      list: [],
    }
    console.log([...l1, obj], 'devsh')
    let list = [...l1, obj];
    setL1(list);
    setListName('')
  }

  const handleAddTask = (index) => {
    let obj = {
      title: tileTitle,
      text: tileText,
    }
    let result = l1
    result.map((item, id) => {
      if (id === index) {
        item.list = [...item.list, obj]
      }
    })

    console.log(result, "nitin");

    setL1([...result]);
    setTileText('');
    setTileTitle('');
    setInputState(!inputState);

  }
  return (
    <PAGECONTAINER>
      <input type="text" value={listName} onChange={(e) => setListName(e.target.value)} />
      <span onClick={() => handleListInsert()}>Add list</span>
      <div>
        {l1 && l1.map((item, index) => (
          <div style={{ width: '30%', border: '1px solid #d3d3d3' }}>
            <h2>{item.title}</h2>
            {item.list.map(list => (
              <div>
                <h2>{list.title}</h2>
                <h2>{list.text}</h2>
              </div>
            ))}
            {inputState ? 
            <> 
            <input type="text" value={tileTitle} onChange={(e) => setTileTitle(e.target.value)} />
            <input type="text" value={tileText} onChange={(e) => setTileText(e.target.value)} />
            <span onClick={() => handleAddTask(index)} >Add</span>
            </>
            : <button onClick={() => setInputState(!inputState)}>+</button>}
          </div>
        ))
        }
      </div>
    </PAGECONTAINER>
  )
}

export default LandingPage;
