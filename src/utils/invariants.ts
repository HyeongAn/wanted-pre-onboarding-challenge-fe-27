const prefix = 'Invariants: failed'

const invariants = (condition: unknown, message: string | (() => string)) => {
  if (condition) return

  const providedMessage: string | undefined = typeof message === 'function' ? message() : message

  const value: string = `${prefix} ${providedMessage}`
  throw new Error(value)
}

export default invariants
