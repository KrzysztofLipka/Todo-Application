import * as React from 'react';
import { CaneldarIcon, DailyTodolistIcon2, DailyTodolistIcon } from '../common/Icons';
//import './Header.css';




interface IDashboardView {
  name: string;
  timerCycles: number;
}

class HeaderView extends React.Component<{}>
{
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="HeaderContainer">
        <div className='all-list'><DailyTodolistIcon /></div>
        <div className='calendar'><CaneldarIcon /></div>
        <div className='daily'><DailyTodolistIcon2 /></div>

      </div>
    );
  }

}

export default HeaderView;