import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';




class LeftPanel extends Component 
{
    render() 
    {
      return <div>

        <div className='bgr'>
          <Link to='/journal'>
            <button className ='App-button'>
              Журнал
            </button>
          </Link>

          <Link to='/schedule'>
            <button className ='App-button'>
              Расписание
            </button>
          </Link>
          
        </div>
      </div>
    }
}

export default LeftPanel;