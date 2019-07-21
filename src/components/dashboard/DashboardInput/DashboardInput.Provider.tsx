import React from 'react'
import { inject } from 'mobx-react'
import {DashboardInputController} from './DashboardInput.Controller'
import InputViewModel from './DashboardInput.ViewModel'
import RootStore from '../RootStore'
import {IDashboardInputControllerProps} from '../../dashboard/DashboardInput/DashboardInput.Controller'

@inject(RootStore.type.DASHBOARD_MODEL)
class DashboardInputProvider extends React.Component {
    inputViewModel: any;
    constructor(props: any) {
        super(props);
        const dashboardModel = props[RootStore.type.DASHBOARD_MODEL]
        this.inputViewModel = new InputViewModel(dashboardModel);
    }

    render(){
        return(
            <DashboardInputController viewModel = {InputViewModel}/>
        )
    }

}

export default DashboardInputProvider;
