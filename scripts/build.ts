import * as esbuild from 'esbuild'

const main = async (buildOptions: esbuild.BuildOptions, isWatch: boolean) => {
  const context = await esbuild.context(buildOptions)
  await context.rebuild()
  if (isWatch) {
    await context.watch()
    console.log('watching ...')
  } else {
    context.dispose()
  }
}

main(
  {
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outfile: './dist/index.js',
    minify: true,
    format: 'cjs',
    platform: 'node',
    external: ['serverless-http', 'express'],
  },
  process.argv[2] === '--watch',
)
