import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../redux/actions/productAction';
import { RingLoader } from 'react-spinners';
import DataTable from 'react-data-table-component';
import { BsArrowDownShort, BsSearch } from 'react-icons/bs';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { postFailure, postRequest, postSuccess } from '../../../../redux/actions/productsStoreAction';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
 
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const allProducts = products.reducers?.getProducts?.products;

  let productsInfo = allProducts;
  productsInfo = productsInfo.filter((value) => value?.category.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  //sorting of data 


  // Queries
  const { refetch } = useQuery({
    queryKey: [dispatch], queryFn: () =>
      axios.get(`https://junction-shop-subrota.vercel.app/get-products`)
        .then(res => {
          dispatch(getProducts(res?.data?.data))
          setLoading(false);
        })
        .catch(error => console.error(error))

  });

  const sortIcon = <BsArrowDownShort style={{ color: "green", fontSize: "28px" }}></BsArrowDownShort>

  const columns = [
    {
      name: <h5 style={{ color: 'lime' }}>Serial</h5>,
      selector: (row, index) => <p style={{ color: 'lime', fontSize: "16px" }}>{index + 1}</p>,
    },
    {
      name: <h5 style={{ color: 'lime' }}>Category</h5>,
      selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}>{row?.category ? row?.category : "not found"}</p>,
      sortable: true,
      sortFunction: (a, b) => a - b, 
    },
    {
      name: <h5 style={{ color: 'lime' }}> Description</h5>,
      selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}>{
        row?.description?.length > 40 ?
          row?.description?.slice(0, 40) ? row?.description?.slice(0, 40) + "..." : "not found"
          : row?.description ? row?.description : "not found"}</p>,
      sortable: true,
      sortFunction: (a, b) => a - b, 
    },
    {
      name: <h5 style={{ color: 'lime' }}> Price</h5>,
      selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}>${row?.price ? row?.price : "not found"}</p>,
      sortable: true,
      sortFunction: (a, b) => a - b, 
    },
    {
      name: <h5 style={{ color: 'lime' }}> Rating</h5>,
      selector: (row) => <p style={{ color: '#04427C', fontSize: "16px" }}> ⭐ {row?.rating ? row?.rating : "not found"}</p>,
      sortable: true,
      sortFunction: (a, b) => a - b, 
    },
    {
      name: <h5 style={{ color: 'lime' }}> Image</h5>,
      selector: (row) => <img src={row?.productImage ? row?.productImage : "not found"} alt="flag" style={{ height: "50px", width: "50px", margin: "4px", border: "3px solid lime", borderRadius: "14px" }} />,
    },
    {
      name: <h5 style={{ color: 'lime' }}>Edit</h5>,
      selector: (row) => <NavLink to={`/edit-product/${row?._id}`}><AiFillEdit style={{ fontSize: "25px", color: "green" }}></AiFillEdit></NavLink>,
    },
    {
      name: <h5 style={{ color: 'lime' }}>Delete</h5>,
      selector: (row) => <AiFillDelete
        style={{ fontSize: "25px", color: "red" }}
        className='deleteIcon'
        onClick={() => deleteProduct(row?._id, row?.category)}></AiFillDelete>,
    }
  ]
  //delete product 

  const deleteProduct = (id, category) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert single " + category + " data !!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
      timer:12000,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(postRequest("request"));
        return fetch('https://junction-shop-subrota.vercel.app/deleteProduct/' + id, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then((data) => {
            if (data) {
              dispatch(postSuccess("success"));
              Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Your single product' + category + 'has been deleted.',
                timer: 6000,
              });
              refetch();
            }
          })
          .catch((error) => {
            console.log("error", error);
            dispatch(postFailure(error));
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          {
            title: 'Cancelled',
            text: 'Your imaginary product ' + category + ' is safe :)',
            icon: 'error',
            timer:6000,
          }
        );
      }
    })

  }

  if (loading) {
    return <div style={{ margin: "20% 50%" }}>
      <RingLoader color="#36d7b7" />
    </div>
  }

  return (
    <>
    <Helmet>
      <title>All products </title>
    </Helmet>
      <div style={{ height: "80px", marginBottom: "25px" }}></div>
      <div className="w-75 my-5 mx-auto d-flex">
        <input type="text" onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='Search by product category' />
        <button className='btn btn-primary  p-2 px-4 mx-2'><BsSearch></BsSearch></button>
      </div>

      <div id='tableDiv'>
        <DataTable
          pagination
          sortIcon={sortIcon}
          data={productsInfo}
          columns={columns}
          striped
          highlightOnHover
          fixedHeader
          fixedHeaderScrollHeight="700px"
        />
      </div>

    </>
  );
};

export default AllProducts;