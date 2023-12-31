import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useState } from 'react';
import { TodoWrap } from './components/todoWrap';


function App() {

  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState([])
  const itemEvent = (event) => {
    setInputList(event.target.value);
  }
  const listItem = (e) => {
    e.preventDefault();
    if(!inputList){

    }
    else{
      setItem((olditem) => {
        return [...olditem, inputList]
      })
      setInputList("");
    }
  }
  const deleteItem = (id) => {
    console.log('delete');
    setItem((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='row mt-5'>
            <div className='col-12'>
              <div className='form justify-content-center'>
                <form className='pt-3 row pb-3'>
                    <h2 className='mb-3'>Todo List</h2>
                    <div className='col-8 ms-4 p-0'>
                      <input placeholder='Add Task' className='form-control' type='text' onChange={itemEvent} value={inputList} />
                      </div>
                    <div className='col-3 p-0'>
                      <button className='btn btn-success' onClick={listItem}>ADD</button>
                      </div>
                </form>
                <ol>
                  {
                    Item.map((itemval, index) => {
                      return <TodoWrap text = {itemval} key={index} id={index} onSelect={deleteItem} />
                    })
                  }
                </ol>
              </div>  
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
