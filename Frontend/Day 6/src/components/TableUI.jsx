import { Link } from 'react-router-dom';
import '../assets/css/TableUI.css';
function TableUI({header, columns, flexRatio}){
    
    
    return(
        <div className='table-ui-outer'>
            <div className='table-ui-row-head'>
                {header.map((h,index)=>
                <div className='table-ui-column' style={{flex:flexRatio[index]}}>{h}</div>
                )}
            </div>
            {columns.map((c,index)=>
                <Link to={c.linkto} className='table-ui-row'>
                {header.map((h,index)=>
                    <div className='table-ui-column' style={{flex:flexRatio[index]}}>{c[h]}</div>
                )}
                </Link>
            )}
        </div>
    );
}
export default TableUI;

/*
const header=[];
const columns[{}];
const flexRatio=[];
<TableUI header={header} columns={columns} flexRatio={flexRatio}/>
*/