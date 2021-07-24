import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

const PAGECONTAINER = styled.div``;


function LandingPage() {
  const [addListState, setAddListState] = useState(false);
  const [l1, setL1] = useState([]);

  const [listName, setListName] = useState('');
  const componentListState = useSelector(state => state.LandingReducers.componentList);
  const dispatch = useDispatch();

  const handleListInsert = () => {
    let obj = {
      title: listName,
      list: []
    }
    console.log([...l1, obj], 'devsh')
    let list = [...l1, obj];
    setL1(list);
    setListName('')
  }

  const handleAddTask = (index) => {
    let obj = {
      title: '',
      isActive: true,
      text: ''
    }
    let result = l1
    result.map((item, id) => {
      if (id === index) {
        item.list = [...item.list, obj]
      }
    })

    setL1([...result])

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
                <input type="text" />
                <span>fsifhs</span>
              </div>
            ))}
            <span onClick={() => handleAddTask(index)} >Add</span>
          </div>
        ))
        }
      </div>
    </PAGECONTAINER>
  )
}

export default LandingPage;
