import React from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

class Table extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable({
            "ajax": 'http://stocksgems.in/api.php',
            "aLengthMenu": [
                [10,25, 50, 100,500],
                [10,25, 50, 100,500]
            ],		
            "fnRowCallback" : function(nRow, aData, iDisplayIndex){
                var index = iDisplayIndex +1;
                $('td:eq(0)',nRow).html(index);
                return nRow;
            },
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets":[0]
        }] 
        });
    });   
 }
  render(){
  return (
    <div className="MainDiv">          
          <table id="example" className="display">
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>COMPANY</th>
                    <th>PRICE (Rs)</th>
                    <th>CHANGE (%)</th>
                    <th>VOLUME ("000")</th>
                    <th>DAY'S H/L (Rs)</th>
                    <th>52-WEEK H/L (Rs)</th>
                    <th>Average Rank</th>
                    <th>Hight Differnt</th>
                    <th>Current Differnt</th>
                </tr>
            </thead>
            <tbody>            
            </tbody>
            <tfoot>
                <tr>
                <th>Sr No</th>
                    <th>COMPANY</th>
                    <th>PRICE (Rs)</th>
                    <th>CHANGE (%)</th>
                    <th>VOLUME ("000")</th>
                    <th>DAY'S H/L (Rs)</th>
                    <th>52-WEEK H/L (Rs)</th>
                    <th>Average Rank</th>
                    <th>Hight Differnt</th>
                    <th>Current Differnt</th>
                </tr>
            </tfoot>
        </table>          
        </div>
  );
}
}
export default Table;