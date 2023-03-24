type Response = {
  message: string
  currentDate: string
}

export const example = (): Response => {
  return {
    message: 'Example🔰',
    currentDate: new Date().toISOString(),
  }
}
