import { render } from '@testing-library/react';
import React,{useState,useEffect} from 'react';
import data from '../services/data.json';
import {AgGridReact} from 'ag-grid-react';
import classes from './dataRendering.module.scss'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import Dialog from '../uicomponents/dialog/dialog';
import Button from '../uicomponents/button/button';
import './dataRendering.scss';
import '../style/globalstyles.scss';

const DataRendering =()=>{
    const [colDefs,setColDefs] = useState([{}]);
    const [rowData,setRowData] = useState(data);
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [movieImage,setMovieImage] = useState("");
    const [openDialog, setOpenDialog] = useState(false)

    useEffect(() => {
        setColumnDefs();
      },[]);

      const onGridReady = (params:any) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }   
 
      const setColumnDefs = ()=>{
        const columnDefs =    [
            { headerName: 'Title', field: 'title',resizable: true, width:320},
            { headerName: 'Year Released', field: 'year',resizable: true, width:160 },
            { headerName: 'Genre', field: 'genre',resizable: true, width:300}
        ];
        setColDefs(columnDefs);
    }
    const rowClicked = (e: any)=>{
        if(e.data && e.data.img_url){
            setOpenDialog(true);
            setMovieImage(e.data.img_url)
        }
        
    }
    const closeDialog=()=>{
        setOpenDialog(false);
        setMovieImage("");
    }
    return(
        <div >
            <div className=" mdHeader d-flex flex-row justify-content-start mb-2">
                Data Rendering
            </div>
            <div className=" d-flex flex-row justify-content-center ">
                Movies 
            </div>
            <div className=" d-flex justify-content-center  ">
                <div className={classes.grid + "  ag-theme-blue mb-4 "}> 
                    <AgGridReact rowData={rowData}
                    columnDefs={colDefs} onGridReady={onGridReady} onRowClicked={rowClicked}  >
                    </AgGridReact>
                </div>
            </div>
            
            <Dialog isOpen={openDialog} onClose={closeDialog} header="Create Order">
                <div>
                <div className=" d-flex flex-row justify-content-center mb-2 ">
                    <img src={movieImage} alt="Error Finding Movie image"/>
                </div>
                <div className=" d-flex flex-row justify-content-center ">
                    <Button label="OK" onClick={closeDialog}/>
                </div>
                </div>
            </Dialog>
        </div>
    )
};
    
    
export default DataRendering;