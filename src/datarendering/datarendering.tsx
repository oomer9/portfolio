import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import data from '../services/data.json';
import {AgGridReact} from 'ag-grid-react';
import classes from './dataRendering.module.scss'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Dialog from '../uicomponents/dialog/dialog';

const DataRendering =()=>{
    const [colDefs,setColDefs] = useState([{}]);
    const [rowData,setRowData] = useState(data);
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    useEffect(() => {
        setColumnDefs();
        console.log(data)
      },[]);

      const onGridReady = (params:any) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }   
 
      const setColumnDefs = ()=>{
        const columnDefs =    [
            { headerName: 'Title', field: 'title',resizable: true },
            { headerName: 'Year Released', field: 'year',resizable: true },
            { headerName: 'Genre', field: 'genre',resizable: true}
        ];
        setColDefs(columnDefs);
    }
   
    return(
        <div >
            <div className=" d-flex flex-row justify-content-center ">
                Movies 
            </div>
            <div className=" d-flex justify-content-center  ">
                <div className={classes.grid + "  ag-theme-alpine mb-4 "}> 
                    <AgGridReact rowData={rowData}
                    columnDefs={colDefs} onGridReady={onGridReady} onRowClicked={rowClicked} enableBrowserTooltips={true} >
                    </AgGridReact>
                </div>
            </div>
            
            <Dialog isOpen={false}>
                
            </Dialog>
        </div>
    )
};
    const rowClicked = (e: any)=>{
        console.log(e)
    }
    
export default DataRendering;