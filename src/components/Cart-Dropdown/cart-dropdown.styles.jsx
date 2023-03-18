import styled from "styled-components";

export const CartDropdownContainer = styled.div`
position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  
  button {
    margin-top: auto;
    font-size: 13px;
  }  
  `  

  export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  `

  export const CartItems = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    overflow: auto;
  `