import express from 'express'
import { Server } from 'http'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import { Context, Handler } from 'aws-lambda'
import { createServer, proxy } from 'aws-serverless-express'
import { AppModule } from './appModule'

async function bootstrap(): Promise<Server> {
  const expressApp = express()
  const adapter = new ExpressAdapter(expressApp)
  const nestApp = await NestFactory.create(AppModule, adapter)
  await nestApp.init()
  return createServer(expressApp)
}

let cachedServer: Server

export const handler: Handler = async (event: any, context: Context) => {
  if (!cachedServer) {
    cachedServer = await bootstrap()
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise
}
