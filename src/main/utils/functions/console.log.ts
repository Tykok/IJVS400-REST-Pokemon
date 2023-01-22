function log (res: string): void {
  console.log(res)
}

function error (res: string): void {
  console.error(res)
}

function warn (res: string): void {
  console.warn(res)
}

function table (res: unknown[]): void {
  console.table(res)
}

function info (res: string): void {
  console.info(res)
}

function debug (res: string): void {
  console.debug(res)
}

const console = {
  log,
  error,
  warn,
  table,
  info,
  debug
}

export default console
