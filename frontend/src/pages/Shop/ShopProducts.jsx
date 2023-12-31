import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import ShopAllProducts from '../../components/Shop/ShopAllProducts.jsx'

const ShopProducts = () => {
  return (
    <div>
        <DashboardHeader />
        <div className="flex w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashboardSideBar active={3} />
          </div>
          <div className="w-full justify-center flex">
                <ShopAllProducts />
          </div>
        </div>
    </div>
  )
}

export default ShopProducts