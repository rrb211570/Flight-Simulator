import { useEffect, useState } from 'react';
import ControlPanel from './components/ControlPanel/ControlPanel';
import {FeedbackPanel} from './components/FeedbackPanel/FeedbackPanel';
import {SimulatorPanel} from './components/SimulatorPanel/SimulatorPanel';
import './DashboardPanel.css';

function DashboardPanel() {

    return (
        <div id='dashboardPanel'>
            <ControlPanel />
            <div id='dashboardPanel__canvases'>
                <SimulatorPanel />
                <FeedbackPanel />
            </div>
        </div>
    )
}

export default DashboardPanel;