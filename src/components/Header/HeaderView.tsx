import * as React from 'react';
import { HeaderViewModel } from './Header.ViewModel';
import { Modal } from '../common/Modal/Modal.View';
import { observer } from 'mobx-react'
//import { CaneldarIcon, DailyTodolistIcon2, DailyTodolistIcon } from '../common/Icons';

interface IHeaderProps {
  headerVm: HeaderViewModel;
}

@observer
class HeaderView extends React.Component<IHeaderProps>
{
  render() {
    return (
      <div className="HeaderContainer">

      </div>
    );
  }
}

export default HeaderView;