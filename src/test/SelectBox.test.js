import { render, screen } from '@testing-library/react'
import SelectBox from '../components/SelectBox'
import { defaultWallets } from '../constants/wallets'

describe('Payer Wallet', () => {
  beforeEach(() => {
    render(
      <SelectBox
        wallets={defaultWallets}
        defaultWallet={defaultWallets[0]}
        label="Payer"
      />
    )
  })

  test('Should Show Payer Default Wallet and show Balance', () => {
    //   payer wallet USD
    const wallets = screen.getByLabelText('Payer')
    expect(wallets).toHaveValue('USD')

    //   show balance Wallet
    const balance = screen.getByText(
      `Balance: ${defaultWallets[0].balance} ${defaultWallets[0].name}`
    )
    expect(balance).toBeInTheDocument()
  })

  test('textbox for enter amount', () => {
    //   show Input for amount
    const amount = screen.getByLabelText('Payer-input')
    expect(amount).toBeInTheDocument()
  })
})

describe('Receive Wallet', () => {
  beforeEach(() => {
    render(
      <SelectBox
        wallets={defaultWallets}
        defaultWallet={defaultWallets[1]}
        label="Receiver"
        disabled={true}
      />
    )
  })

  test('Should Show Receiver Default Wallet and Show Balance', () => {
    //   payer wallet USD
    const wallets = screen.getByLabelText('Receiver')
    expect(wallets).toHaveValue('EUR')

    //   show balance Wallet
    const balance = screen.getByText(
      `Balance: ${defaultWallets[1].balance} ${defaultWallets[1].name}`
    )
    expect(balance).toBeInTheDocument()
  })
  test('should exist input to enter amount', () => {
    const amount = screen.getByLabelText('Receiver-input')
    expect(amount).toBeInTheDocument()
  })
})
