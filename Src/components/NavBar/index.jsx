import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../BrandLogo";
import { Button } from "../../components/button";
import { Marginer } from "../../components/marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 1.3em;
  justify-content: space-between;



`;

const AccesssibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

`;

const AnchorLink = styled.a`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  
  &:hover {
      filter: contrast(0.5);
  }
`;

const Separator = styled.div`
  height: 40%;
  width: 1px;
  background-color: #fff;
`;
export function Navbar(props) {
  return <NavbarContainer>
      <BrandLogo>
      <AccesssibilityContainer>
          <AnchorLink>Home</AnchorLink>
          <Marginer direction="horizontal" margin={15} />
          <Separator />
          <AnchorLink>Login</AnchorLink>
          <Marginer direction="horizontal" margin={15} />
          <Separator />
          <Button size= {12}>Hire</Button>
          <Marginer direction="horizontal" margin={15} />
          <Separator />
          <AnchorLink>Blog</AnchorLink>

      </AccesssibilityContainer>
      </BrandLogo>
  </NavbarContainer>

}
