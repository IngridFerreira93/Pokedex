import styled from 'styled-components'

export const DivCard = styled.div `
    display: flex;
    width: 250px;
    height: 300px;
    background:linear-gradient(to right, #d4d3dd, #efefbb);
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    border: 50px;
    border-radius:10px;
`
export const DivButtons = styled.div `
    display: flex;
    justify-content: center;
    
    
    
`
export const ButtonLeft = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    border-radius: 10px;
    border:none;
    outline: none;
    color: black;
    box-shadow: 1px 1px 1px #666;
    margin:5px 10px; 
    :hover{
        background-color: black;
        color: white;
    }
    :active{
        box-shadow: none;
    }
`
export const ButtonRight = styled(ButtonLeft)`
   
`
export const PokeImage = styled.img `
    margin: auto;
    font-weight: lighter;
    width: 60%;
`

export const PokeName = styled.h1 `
    font-size: 1.2em;
    color: black ;
`