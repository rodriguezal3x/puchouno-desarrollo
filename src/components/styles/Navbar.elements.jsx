import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 10px #000000;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 2px 10px #000000;
`;

export const LogoContainer = styled.div`
`;

export const Logo = styled.img`
    width: 50px;
`;

export const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    box-shadow: 1px 1px 20px 4px rgba(148, 147, 147, 0.5);
    border-radius: 5px;
`;

export const Input = styled.input`
    border: none;
    width: 250px;
`;

export const IconNavContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavIcon = styled.li`
`;

export const AIcon = styled.a`
    cursor: pointer;
    padding: 0 40px;
`;

export const  IconN = styled.img`
    height: 40px;
`;

export const  TextNavContainer = styled.ul`
    list-style: none;
    display: flex;
`;

export const  NavText = styled.li`
    justify-items: end;
    padding: 0 20px;
    align-items: center;
    text-align: center;
`;

export const  TextNav = styled.a`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    letter-spacing: 0.06em;
`;

export const  CarContainer = styled.div`
    list-style: none;
    display: flex;
`;