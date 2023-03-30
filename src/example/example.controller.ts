import { Controller, Get } from '@nestjs/common'

@Controller('example')
export class ExampleController {
  @Get()
  index(): string {
    return JSON.stringify({
      message: 'Example🔰',
      currentDate: new Date().toISOString(),
    })
  }
}
