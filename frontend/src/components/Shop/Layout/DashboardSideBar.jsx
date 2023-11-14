import React from "react";
import {
  FcAddDatabase,
  FcCalendar,
  FcEngineering,
  FcHome,
  FcLeave,
  FcMoneyTransfer,
  FcOvertime,
  FcPackage,
  FcPaid,
  FcUndo,
  FcVoicePresentation,
} from "react-icons/fc";
import { PiTicketDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const DashboardSideBar = ({ active }) => {
  const getLinkStyle = (index) => ({
    color: active === index ? "crimson" : "#555",
  });
  return (
    <div className="w-full h-[89vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard"
          className="w-full flex items-center"
          style={getLinkStyle(1)}
        >
          <FcHome size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] 
            ${getLinkStyle(1).color}
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-orders"
          className="w-full flex items-center"
          style={getLinkStyle(2)}
        >
          <FcPackage size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] $
            ${getLinkStyle(2).color}
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-products"
          className="w-full flex items-center"
          style={getLinkStyle(3)}
        >
          <FcPaid size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] 
            ${getLinkStyle(3).color}
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
          style={getLinkStyle(4)}
        >
          <FcAddDatabase size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Add Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-event"
          className="w-full flex items-center"
          style={getLinkStyle(5)}
        >
          <FcCalendar size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]
            ${getLinkStyle(5).color}
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-event"
          className="w-full flex items-center"
          style={getLinkStyle(6)}
        >
          <FcOvertime size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]
            ${getLinkStyle(6).color}
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
          style={getLinkStyle(7)}
        >
          <FcMoneyTransfer size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]
            ${getLinkStyle(7).color}

            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-coupouns"
          className="w-full flex items-center"
          style={getLinkStyle(8)}
        >
          <PiTicketDuotone size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]
            ${getLinkStyle(8).color}

            }`}
          >
            Discout Codes
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-refunds"
          className="w-full flex items-center"
          style={getLinkStyle(9)}
        >
          <FcUndo size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]
            ${getLinkStyle(9).color}

            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-settings"
          className="w-full flex items-center"
          style={getLinkStyle(10)}
        >
          <FcEngineering size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]
            ${getLinkStyle(10).color}

            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4" style={getLinkStyle(12)}>
        <Link to="/dashboard-inbox" className="w-full flex items-center" style={getLinkStyle(11)}>
          <FcVoicePresentation size={30} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]
            ${getLinkStyle(11).color}

            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
