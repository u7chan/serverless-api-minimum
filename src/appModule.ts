import { Module } from '@nestjs/common'
import { ExampleController } from './example'

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [],
})
export class AppModule {}
