import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LandingPage from './Pages/LandingPage';
import StateVariable from './Logics/StateVariable';
import ArrayDisplay from './Logics/ArrayDisplay';
import InpuBinding from './Logics/InpuBinding';
import ListCrud from './Logics/ListCrud';
import CounterApp from './Hooks/UseStateFolder/CounterApp';
import TwoWayInputBinding from './Hooks/UseStateFolder/TwoWayInputBinding';
import FetchData from './Hooks/UseEffectFolder/FetchData';
import FetchDataTabs from './Hooks/UseEffectFolder/FetchDataTabs';
import UseEffectHook from './Hooks/UseEffectFolder/UseEffectHook';
import UseRefHook from './Hooks/UseRefFolder/UseRefHook';
import Parent from './PropsPassing/Parent';
import UseMemoHook from './Hooks/UseMemoFolder/UseMemoHook';
import ReactMemoParent from './ReactMemo/ReactMemoParent';
import UseCallBackHook from './Hooks/UseCallBackFolder/UseCallBackHook';
import PropDrilling from './Hooks/UseContextFolder/PropDrilling';
import UseContextHook from './Hooks/UseContextFolder/UseContextHook';
import TableCrud from './Logics/TableCrud';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <LandingPage /> */}
    {/* <StateVariable /> */}
    {/* <ArrayDisplay /> */}
    {/* <InpuBinding /> */}
    {/* <ListCrud /> */}
    <TableCrud />
    {/* <CounterApp /> */}
    {/* <TwoWayInputBinding /> */}
    {/* <FetchData /> */}
    {/* <FetchDataTabs /> */}
    {/* <UseEffectHook /> */}
    {/* <UseRefHook /> */}
    {/* <Parent /> */}
    {/* <UseMemoHook /> */}
    {/* <ReactMemoParent /> */}
    {/* <UseCallBackHook /> */}
    {/* <PropDrilling /> */}
    {/* <UseContextHook /> */}
  </div>)

