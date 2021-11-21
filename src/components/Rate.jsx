import React from 'react'
import { Flex } from 'rebass'

import { Box, ContainerRate, Image } from './Swap'
import { Label } from './FormControll'

const Rate = (props) => {
  const { payer, rate, receiver, handleSwap } = props
  let content = `${payer.currency} 1 = ${receiver.currency} ${
    rate.conversion_rates[receiver.name]
  }`
  return (
    <ContainerRate justifyContent="space-between" width="100%" padding="0 70px">
      <Flex onClick={handleSwap} padding="0 20px" aria-label="swap">
        <Image src="/media/ex.svg" alt="exchange" />
        <Image src="/media/ex.svg" alt="exchange" rotate="180" />
      </Flex>
      <Box
        padding="0 18px 0 15px"
        border="0.75px solid transparent"
        margin="5px"
        height="55px"
        background="#E9A6A6"
        justifyContent="center"
      >
        <Flex width="100%" alignItems="center">
          <Label padding="5px 10px">Rate:</Label>
          <Label color="#3f3351">{content}</Label>
        </Flex>
      </Box>
    </ContainerRate>
  )
}

export default Rate
