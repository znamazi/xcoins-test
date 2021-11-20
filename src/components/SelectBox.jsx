import React from 'react'
import { Flex } from 'rebass'

import { Label, Select, Input } from './FormControll'
import { Box } from './Swap'

const SelectBox = (props) => {
  const {
    label,
    wallets,
    defaultWallet,
    changeWallet,
    handleAmount,
    amount,
    error
  } = props

  const options = wallets.map((wallet) => (
    <option key={wallet.name} value={wallet.name}>
      {wallet.name}
    </option>
  ))
  return (
    <>
      <Box padding="20px" border="0.75px solid transparent">
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <Label padding="5px 10px" htmlFor={label} color="#ffffff">
            {label}
          </Label>
          <Flex justifyContent="flex-end" alignItems="center">
            <Label
              padding="5px 10px"
              fontWeight="normal"
              fontSize="13px"
              color="#ffffff"
            >
              Balance: {`${defaultWallet.balance} ${defaultWallet.name} `}
            </Label>
            <Label
              fontWeight="normal"
              fontSize="13px"
              color="#e9a6a6"
              cursor="pointer"
              onClick={(e) => handleAmount(defaultWallet.balance, label)}
            >
              (Max)
            </Label>
          </Flex>
        </Flex>
        <Flex width="100%" justifyContent="space-between">
          <Select
            id={label}
            onChange={(e) => changeWallet(e.target.value, label)}
            value={defaultWallet.name}
          >
            {options}
          </Select>
          <Input
            aria-label={`${label}-input`}
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => handleAmount(e.target.value, label)}
            value={amount}
            border={error && error.label === label && '1px solid red'}
          />
        </Flex>
        {error && error.label === label && (
          <Flex justifyContent="flex-end" width="100%" padding=" 0 10px">
            <Label fontWeight="normal" color="red" fontSize="13px">
              {error.message}
            </Label>
          </Flex>
        )}
      </Box>
    </>
  )
}

export default SelectBox
