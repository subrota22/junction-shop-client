import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { BsArrowDownShort, BsSearch } from "react-icons/bs"

const sortIcon = <BsArrowDownShort style={{color:"green", fontSize:"28px"}}></BsArrowDownShort>
function CountryInfo() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true) ;

    let countriesInfo = countries;
    countriesInfo = countriesInfo.filter((value) => value?.name?.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    React.useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(countriesData => {
                setCountries(countriesData);
                setLoading(false) ;
            });
    }, []);

    const columns = [
        {
            name: <h5 style={{ color: 'lime' }}>Serial numbers</h5>,
            selector: (row, index) => <p style={{ color: 'lime', fontSize: "16px" }}>{index + 1}</p>,
        },
        {
            name: <h5 style={{ color: 'lime' }}>Country Name</h5>,
            selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}>{row?.name?.common ? row?.name?.common: "not found"}</p>,
            sortable: true,
        },
        {
            name: <h5 style={{ color: 'lime' }}> Capital</h5>,
            selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}>{row?.capital ? row?.capital:  "not found"}</p>,
            sortable: true,
        },
        {
            name: <h5 style={{ color: 'lime' }}> Population</h5>,
            selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}>{row?.population ? row?.population  : "not found" }</p>,
            sortable: true,
        },
        {
            name: <h5 style={{ color: 'lime' }}> Area</h5>,
            selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}>{row?.area ?  row?.area : "not found" }</p>,
            sortable: true,
        },
        {
            name: <h5 style={{ color: 'lime' }}> Country Flag</h5>,
            selector: (row) => <img src={row?.flags?.png ?  row?.flags?.png : "not found"} alt="flag" style={{ height: "50px", width: "85px", margin: "4px", border: "2px solid lime" }} />,
        },
    ]

    if(loading){
        return <>
        <h2 style={{color:"green", textAlign:"center", marginTop:"20%"}}> The content is loading...</h2>
        </>
    }

    return (
        <>
            <div className="w-75 my-5 mx-auto d-flex">
                <input type="text" onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='Search by country name' />
                <button className='btn btn-primary  p-2 px-4 mx-2'><BsSearch></BsSearch></button>
            </div>

            <div id='tableDiv'>
            <DataTable
                pagination
                sortIcon={sortIcon}
                data={countriesInfo}
                columns={columns}
                fixedHeaderScrollHeight={"220px"}
                selectableRows
                highlightOnHover
                striped
            />
            </div>
        </>
    );
}

export default CountryInfo;