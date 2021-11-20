import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'
import { defaultWallets } from './constants/wallets'

beforeEach(async () => {
  render(<App />)
  const rate = await screen.findByText(/\$ 1 = € 0.8832/)
  expect(rate).toBeInTheDocument()
})

test('render title app', async () => {
  const title = screen.getByText(/Currency Exchange/i)
  expect(title).toBeInTheDocument()
})

test('calculate amount exchange with amount pay', async () => {
  const input = await screen.findByLabelText('Payer-input')

  userEvent.clear(input)
  userEvent.type(input, '10')
  const output = await screen.findByLabelText('Receiver-input')

  expect(input).toHaveValue(10)
  expect(output).toHaveValue(8.832)
})

test('calculate amount exchange with amount receive', async () => {
  const input = await screen.findByLabelText('Receiver-input')

  userEvent.clear(input)
  userEvent.type(input, '10')
  const output = await screen.findByLabelText('Payer-input')

  expect(input).toHaveValue(10)
  expect(output).toHaveValue(11.322)
})

test('Exceed Balance', async () => {
  const input = await screen.findByLabelText('Payer-input')

  userEvent.clear(input)
  userEvent.type(input, '500')
  const error = await screen.findByText('Exceed Balance')

  expect(error).toBeInTheDocument()
})

test('Dont accpect negative number', async () => {
  const input = await screen.findByLabelText('Payer-input')

  userEvent.clear(input)
  userEvent.type(input, '-5')
  const error = await screen.findByText('Wrong Amount')

  expect(error).toBeInTheDocument()
})

test('exchange', async () => {
  const defaultWallets = [
    { name: 'USD', balance: 200, currency: '$' },
    { name: 'EUR', balance: 150, currency: '€' },
    { name: 'GBP', balance: 10, currency: '£' }
  ]
  const input = await screen.findByLabelText('Payer-input')

  userEvent.clear(input)
  userEvent.type(input, '10')

  const buttonExchange = screen.getByRole('button', { name: 'Exchange' })

  userEvent.click(buttonExchange)
  const balancePayer = await screen.findByText(
    `Balance: ${defaultWallets[0].balance - 10} ${defaultWallets[0].name}`
  )
  expect(balancePayer).toBeInTheDocument()
  let balance = parseFloat((defaultWallets[1].balance + 10 * 0.8832).toFixed(3))
  const balanceReceiver = await screen.findByText(
    `Balance: ${balance} ${defaultWallets[1].name}`
  )
  expect(balanceReceiver).toBeInTheDocument()
})

test('should change balance when wallet change and Get new rate based on wallet', async () => {
  const wallets = screen.getByLabelText('Payer')

  // change Wallet
  userEvent.selectOptions(wallets, ['GBP'])
  expect(wallets).toHaveValue('GBP')

  // receive new rate
  const rate = await screen.findByText(/\£ 1 = € 1.1887/)
  expect(rate).toBeInTheDocument()

  // //   show balance new Wallet
  const balance = await screen.findByText(
    `Balance: ${defaultWallets[2].balance} ${defaultWallets[2].name}`
  )
  expect(balance).toBeInTheDocument()
})

test('should swap', async () => {
  const swap = screen.getByLabelText('swap')

  userEvent.click(swap)

  const payerWallet = await screen.findByLabelText('Payer')
  const receiverWallet = await screen.findByLabelText('Receiver')
  expect(payerWallet).toHaveValue('EUR')
  expect(receiverWallet).toHaveValue('USD')
})
