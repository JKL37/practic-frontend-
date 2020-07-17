import React, {Component} from 'react';
import './App.css';
import LeftPanel from './LeftPanel';



class Head extends Component 
{
    render() 
    {
      return <div className='App-header'>

        <div className='App-font'>
            Журнал педагогической нагрузки
        </div>  
        
        <div>
            <button className='App-button-login'>
                Вход
            </button>     
        </div>

      </div>
    }
}

class Home extends Component 
{
    render()
    {
        return (
            <div className="App">
               <Head/>
               <LeftPanel/>
            </div>
        )
    }
}



export default Home;