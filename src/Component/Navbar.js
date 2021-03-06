import React,{Component}from 'react'
import {Link} from 'react-router-dom';
//import logo from '../../public/img/logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component{
    render()
    {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    {/* <img src={logo} alt="store" className="navbar-brand"></img> */}
                   <h2><span className="text-danger">V</span>cart</h2>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Product List
                        </Link>   
                                     
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fa fa-cart-plus"/>
                        My Cart
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>    
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalizer;
    }
`;
