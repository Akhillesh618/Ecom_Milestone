import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [ {cart,user},dispatch ] = useStateValue();

    const handelAuthentication =()=>{

        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">

            <Link to='/' >

                <img
                    className="header_logo"
                    src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
                    alt=""
                />

            </Link>


            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                < SearchIcon
                    className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div className="header_option">

                        <span className='header_opLineOne'>
                            Hello {user?.email}
                    </span>
                        <span onClick={handelAuthentication} className='header_opLineTwo'>
                            {user?'Sign Out':'Sign In'}
                    </span>

                    </div>
                </Link>

                <div className="header_option">
                    <span className='header_opLineOne'>
                        Returns
                    </span>
                    <span className='header_opLineTwo'>
                        & Orders
                    </span>
                </div>


                <div className="header_option">
                    <span className='header_opLineOne'>
                        Your
                    </span>
                    <span className='header_opLineTwo'>
                        Prime
                    </span>
                </div>

                <Link to='/checkout'>
            

                    <div className="header_optionBasket">
                        < ShoppingBasketIcon />
                        <span className="header_opLineTwo  header_BasketCount">{cart?.length}</span>
                    </div>

                </Link>





            </div>
        </div>
    )
}

export default Header
