import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import data from '../services/data.json';
import {AgGridReact} from 'ag-grid-react';
import classes from './dataRendering.module.scss'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import Dialog from '../uicomponents/dialog/dialog';

const DataRendering =()=>{
    const [colDefs,setColDefs] = useState([{}]);
    const [rowData,setRowData] = useState(data);

    useEffect(() => {
        setColumnDefs();
        console.log(data)
      },[]);

      const setColumnDefs = ()=>{
        const columnDefs =    [
            { headerName: 'Title', field: 'title',width:300 },
            { headerName: 'Year Released', field: 'year' },
            { headerName: 'Genre', field: 'genre',width:300}
        ];
        setColDefs(columnDefs);
    }
    const rowClicked = (e: any)=>{
        console.log(e)
    }
    return(
        <div>
            <div className=" d-flex flex-row justify-content-center ">
                Movies 
            </div>
            <div className={classes.grid + "  justify-content-center ag-theme-blue mb-4 "}> 
                <AgGridReact rowData={rowData}
                columnDefs={colDefs} onRowClicked={rowClicked} enableBrowserTooltips={true} >
                </AgGridReact>
            </div>
            <Dialog isOpen={false}>
                
            </Dialog>
        </div>
    )
    

   
}
export default DataRendering;