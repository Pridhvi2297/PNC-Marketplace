import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Visibility, Delete } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

const ShopAllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch, seller._id]);

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    { field: "name", headerName: "Name", minWidth: 180, flex: 1.4 },
    { field: "price", headerName: "Price", minWidth: 100, flex: 0.6 },
    { field: "stock", headerName: "Stock", type: "number", minWidth: 80, flex: 0.5 },
    { field: "sold_out", headerName: "Sold out", type: "number", minWidth: 130, flex: 0.6 },
    {
      field: "preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: ({ row }) => (
        <Link to={`/product/${row.id}`}>
          <Button><Visibility /></Button>
        </Link>
      ),
    },
    {
      field: "delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: () => (
        <Button><Delete /></Button>
      ),
    },
  ];

  const rows = products?.map(({ _id, name, discountPrice, stock, sold_out }) => ({
    id: _id,
    name,
    price: `US$ ${discountPrice}`,
    stock,
    sold_out,
  })) || [];

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            components={{
              Toolbar: GridToolbarContainer,
              Export: GridToolbarExport,
            }}
          />
        </div>
      )}
    </>
  );
};

export default ShopAllProducts;
