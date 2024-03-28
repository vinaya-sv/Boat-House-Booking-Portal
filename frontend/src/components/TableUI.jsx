import { Link } from 'react-router-dom';
import '../assets/css/TableUI.css';
function TableUI({header, columns, flexRatio,search}){
    
    const tableContains=(str,obj)=>{
        const arr=Object.values(obj);
        for(var i=0;i<arr.length;i++){
            if(arr[i].toString().indexOf(str)>=0)
                return true;
        }
        return false;
    }
    return(
        <div className='table-ui-outer'>
            <div className='table-ui-row-head'>
                {header.map((h,index)=>
                <div key={index} className='table-ui-column' style={{flex:flexRatio[index]}}>{h}</div>
                )}
            </div>
            {columns.map((c,index)=>
            {

                if(!search || (search=="" || tableContains(search,c))) {
                return (
                    <>
                    {c.linkto
                    ?
                    <Link to={c.linkto} className='table-ui-row'>
                    {header.map((h,index)=>
                        <div key={index} className='table-ui-column' style={{flex:flexRatio[index]}}>{c[h]}</div>
                    )}
                    </Link>
                    :
                    <div to={c.linkto} className='table-ui-row'>
                    {header.map((h,index)=>
                        <div key={index} className='table-ui-column' style={{flex:flexRatio[index]}}>{c[h]}</div>
                    )}
                    </div>
                    }
                    
                    </>
                )
                }
                {/* } */}
            }
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