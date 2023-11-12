import React from 'react';
import styles from '../../styles/styles';
import { navItems } from '../../static/data';
import { Link } from 'react-router-dom';

const Navbar = ({ active }) => {
  return (
    <div className={`flex space-x-6 md:space-x-0`}>
      {navItems &&
        navItems.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className={`${
              active === index + 1 ? 'text-[#a2b73b]' : 'text-[#0a0505] 800px:text-white'
            } font-[500] px-6 cursor-pointer hover:bg-[#34a48e] pb-[30px] 800px:pb-0 md:pb-0 md:mr-6`}
          >
            {item.title}
          </Link>
        ))}
    </div>
  );
};

export default Navbar;
