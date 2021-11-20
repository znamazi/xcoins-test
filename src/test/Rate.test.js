import { render, screen } from '@testing-library/react'
import App from '../App'
import Rate from '../components/Rate'

test('First render get info api rate', async () => {
  render(<Rate />, { wrapper: App })

  const rate = await screen.findByText(/\$ 1 = € 0.8832/)
  expect(rate).toBeInTheDocument()
})
