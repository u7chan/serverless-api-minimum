import serverless, { Handler } from 'serverless-http'
import express, { Express, Request, Response, NextFunction } from 'express'
import HttpStatus from 'http-status-codes'
import { example } from './example'

const app: Express = express()

app.get('/example', (_req: Request, res: Response, _next: NextFunction) => {
  return res.status(HttpStatus.OK).json(example())
})

app.use((_req: Request, res: Response, _next: NextFunction) => {
  return res.status(HttpStatus.NOT_FOUND).json({
    error: 'Not Found',
  })
})

export const handler: Handler = serverless(app)
