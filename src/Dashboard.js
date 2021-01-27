import React, { Component } from 'react'
import DataTable from 'react-data-table-component';

export class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  loading: false,
		  data: {}
		};
	  }
	  componentDidMount() {
        fetch(`http://localhost/stocksgems_2/api.php`)
        .then(response =>{
            return response.json();
        })
        .then(data=>{
            this.setState({data});
        });
      }          
	
    render() {
		const columns = [
			{
			  name: 'Sr No',
			  selector: 'sr_no',
			  sortable: false,
			},
			{
			  name: 'COMPANY',
			  selector: 'company',
			  sortable: true,
			  right: true,
			},
			{
			  name: 'PRICE (Rs)',
			  selector: 'price',
			  sortable: true,
			  right: true,
			},
			{
			  name: 'CHANGE (%)',
			  selector: 'change',
			  sortable: true,
			  right: true,
			},
			{
			  name: 'VOLUME ("000")',
			  selector: 'volume',
			  sortable: true,
			  right: true,
			},
			{
			  name: "DAY'S H/L (Rs)",
			  selector: 'day_h_l',
			  sortable: true,
			  right: true,
			},
			{
			  name: '52-WEEK H/L (Rs)',
			  selector: 'price_h_l',
			  sortable: true,
			  right: true,
			},
			{
			  name: 'Average Rank',
			  selector: 'rank',
			  sortable: true,
			  right: true,
			},
			{
				name: 'Hight Differnt',
				selector: 'diff',
				sortable: true,
				right: true,
			},
			{
				  name: 'Current Differnt',
				  selector: 'cdiff',
				  sortable: true,
				  right: true,
			},	
		  ];
		  const data =this.state.data;
        return ( <div>
						<DataTable
						className="text-center"
						columns={columns}
						date={data}						
						/>
            </div>
        )
    }
}

export default Dashboard