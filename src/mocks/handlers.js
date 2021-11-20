// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:5000/USD', (req, res, ctx) => {
    return res(
      ctx.json({
        result: 'success',
        documentation: 'https://www.exchangerate-api.com/docs',
        terms_of_use: 'https://www.exchangerate-api.com/terms',
        time_last_update_unix: 1637280001,
        time_last_update_utc: 'Fri, 19 Nov 2021 00:00:01 +0000',
        time_next_update_unix: 1637366401,
        time_next_update_utc: 'Sat, 20 Nov 2021 00:00:01 +0000',
        base_code: 'USD',
        conversion_rates: {
          USD: 1,
          EUR: 0.8832,
          GBP: 0.7431
        }
      })
    )
  }),
  rest.get('http://localhost:5000/GBP', (req, res, ctx) => {
    return res(
      ctx.json({
        result: 'success',
        documentation: 'https://www.exchangerate-api.com/docs',
        terms_of_use: 'https://www.exchangerate-api.com/terms',
        time_last_update_unix: 1637366401,
        time_last_update_utc: 'Sat, 20 Nov 2021 00:00:01 +0000',
        time_next_update_unix: 1637452801,
        time_next_update_utc: 'Sun, 21 Nov 2021 00:00:01 +0000',
        base_code: 'GBP',
        conversion_rates: {
          GBP: 1,
          EUR: 1.1887,
          USD: 1.3458
        }
      })
    )
  }),
  rest.get('http://localhost:5000/EUR', (req, res, ctx) => {
    return res(
      ctx.json({
        result: 'success',
        documentation: 'https://www.exchangerate-api.com/docs',
        terms_of_use: 'https://www.exchangerate-api.com/terms',
        time_last_update_unix: 1637366401,
        time_last_update_utc: 'Sat, 20 Nov 2021 00:00:01 +0000',
        time_next_update_unix: 1637452801,
        time_next_update_utc: 'Sun, 21 Nov 2021 00:00:01 +0000',
        base_code: 'EUR',
        conversion_rates: {
          EUR: 1,
          GBP: 0.8412,
          USD: 1.1323
        }
      })
    )
  })
]
