import { Box,styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Component = styled(Box)`
    background:#fff;
    height:45px;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    align-items:center;
`

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius:10px;
`

const Icon = styled(Box)`
    position:absolute;
    height:100%;
    padding:6px 10px;
    color:#919191
`

const InputField = styled(InputBase)`
    width:100%;
    padding:16px;
    height: 15px;
    padding-left:65px;
    font-size:14px;
`


function Search({setText}) {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon
                    fontSize='small'
                />
            </Icon>
            <InputField
                placeholder='Search or start a new chat'
                onChange={(e)=>setText(e.target.value)}  //search m daalega to onchange m state 
                //change krna hoga aur vo change menuu m hoga jo bhi type krenge vo event m aa jayegi 
            />
        </Wrapper>
    </Component>
  )
}

export default Search
