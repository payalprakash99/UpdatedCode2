import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import './ag_grid.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const Sample = () => {
   const rowData = [
       {Returns: "Annualized Returns", "Axis Long Term Equity Fund Growth": "16.34%"},
       {Returns: "Annualized Return Last 1 year", "Axis Long Term Equity Fund Growth": "64.75%"},
       {Returns: "Annualized Return Last 3 years", "Axis Long Term Equity Fund Growth": "13.21%"},
       {Returns: "Annualized Return Last 5 years", "Axis Long Term Equity Fund Growth": "10.08%"},
       {Returns: "Return Last 3 months", "Axis Long Term Equity Fund Growth": "8.76%"},
       {Returns: "Year-To-Date Return", "Axis Long Term Equity Fund Growth": "78.98%"}
   ];
  

   return (
       <div className="ag-theme-alpine"  align ="left"  style={{height:"100%", width: "100%"}}       >
       
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="Returns" align="left" resizable="true" width="290" ></AgGridColumn>
               <AgGridColumn field="Axis Long Term Equity Fund Growth" align="left" width="310"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};

export default Sample;