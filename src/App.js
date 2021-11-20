import React from 'react'
import { Container, Title, Wrapper } from './components/Swap'
import { Button } from './components/FormControll'
import SelectBox from './components/SelectBox'
import Rate from './components/Rate'
import { defaultWallets } from './constants/wallets'
import Api from './utils/axios'

const App = () => {
  const axios = new Api()
  const [wallets, setWallets] = React.useState(defaultWallets)
  const [payerWallet, setPayerWallet] = React.useState(wallets[0])
  const [receiverWallet, setReceiverWallet] = React.useState(wallets[1])
  const [rate, setRate] = React.useState()
  const [amount, setAmount] = React.useState({ pay: '', receive: '' })
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const getRate = async () => {
      try {
        let rate = await axios.get(`/${payerWallet.name}`)
        //
        setRate(rate.data)
      } catch (error) {
        console.log('Error happend in fetching data', error)
      }
    }
    getRate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payerWallet])

  React.useEffect(() => {
    if (rate && amount.pay) handleAmount(amount.pay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payerWallet, receiverWallet, rate])

  const changeWallet = (walletName, type) => {
    let selectedWallet = wallets.find((wallet) => wallet.name === walletName)
    if (type === 'Payer') {
      if (selectedWallet.name === receiverWallet.name)
        setReceiverWallet(payerWallet)

      setPayerWallet(selectedWallet)
    } else {
      if (selectedWallet.name === payerWallet.name)
        setPayerWallet(receiverWallet)

      setReceiverWallet(selectedWallet)
    }
  }
  const handleAmount = (amount, label) => {
    setError('')
    let balance =
      label === 'Payer' ? payerWallet.balance : receiverWallet.balance
    if (amount > balance) {
      setError({ message: 'Exceed Balance', label })
      label === 'Payer'
        ? setAmount({ pay: amount, receive: 0 })
        : setAmount({ pay: 0, receive: amount })

      return
    }
    if (amount < 0) {
      setError({ message: 'Wrong Amount', label })
      return
    }
    if (!rate) {
      setError('Rate Not defiend')
      return
    }
    if (label === 'Payer') {
      let receive = parseFloat(
        (rate.conversion_rates[receiverWallet.name] * amount).toFixed(3)
      )
      setAmount({ pay: parseFloat(amount), receive })
    } else {
      let pay = parseFloat(
        (amount / rate.conversion_rates[receiverWallet.name]).toFixed(3)
      )
      setAmount({ pay, receive: parseFloat(amount) })

      if (pay > payerWallet.balance) {
        setError({ message: 'Exceed Balance', label: 'Payer' })
      }
    }
  }

  const handleSwap = () => {
    let swap = payerWallet
    setPayerWallet(receiverWallet)
    setReceiverWallet(swap)
  }
  const handleExchange = () => {
    if (error) return
    payerWallet.balance = parseFloat(
      (payerWallet.balance - amount.pay).toFixed(3)
    )
    receiverWallet.balance = parseFloat(
      (receiverWallet.balance + amount.receive).toFixed(3)
    )
    let wallet = wallets.filter(
      (item) =>
        item.name !== payerWallet.name && item.name !== receiverWallet.name
    )
    setWallets([...wallet, receiverWallet, payerWallet])
    setAmount({ pay: '', receive: '' })
  }
  return (
    <Wrapper>
      <Title margin="20px">Currency Exchange</Title>
      <Container maxWidth="600px">
        <SelectBox
          label="Payer"
          wallets={wallets}
          defaultWallet={payerWallet}
          changeWallet={changeWallet}
          handleAmount={handleAmount}
          amount={amount.pay}
          error={error}
        />
        {rate && (
          <Rate
            rate={rate}
            receiver={receiverWallet}
            payer={payerWallet}
            handleSwap={handleSwap}
          />
        )}
        <SelectBox
          label="Receiver"
          wallets={wallets}
          defaultWallet={receiverWallet}
          changeWallet={changeWallet}
          handleAmount={handleAmount}
          error={error}
          amount={amount.receive}
        />
        <Button background="#864879" margin="30px 0 0" onClick={handleExchange}>
          Exchange
        </Button>
      </Container>
    </Wrapper>
  )
}

export default App
