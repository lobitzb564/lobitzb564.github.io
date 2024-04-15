import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: navy;
    padding: 0.2rem calc((100vw - 480px) / 2);
    z-index: 12;
    --s: 30px; /* control the size */
  --b: 15px; /* control the thickness of the curved lines */
  
  --_r: calc(1.28*var(--s) + var(--b)/2) at top 50%;
  --_f: calc(99.5% - var(--b)),#F9F2E7 calc(101% - var(--b)) 99.5%,#0000 101%;
  --_g0: calc(-.8*var(--s)), #88A65E var(--_f);
  --_g1: calc(-.8*var(--s)), #BFB35A var(--_f);
  --_s: calc(1.8*var(--s) + var(--b));
  background: 
    radial-gradient(var(--_r) right var(--_g0)) calc(-1*var(--_s)) var(--s),
    radial-gradient(var(--_r) left  var(--_g1))         var(--_s)  calc(-1*var(--s)),
    radial-gradient(var(--_r) right var(--_g1)) calc(var(--_s)/-2) calc(-1*var(--s)),
    radial-gradient(var(--_r) left  var(--_g0)) calc(var(--_s)/ 2) var(--s),
    linear-gradient(90deg,#88A65E 50%,#BFB35A 0);
  background-size: var(--_s) calc(4*var(--s));
`;
 
export const NavLink = styled(Link)`
    color: #555555;
    display: flex;
    width: 120px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 60px;
    cursor: pointer;
    font-size: 15px;
    background-color: white;
    border-width: 2px;
    border-color: #BBBBBB;
    border-style: none;
    &.active {
        color: #000000;
        background-color: #CCCCCC;
        border-bottom: solid;
    }
`;
 
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;