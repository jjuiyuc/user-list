const protocol =
  process.env.REACT_APP_API_PROTOCOL ||
  window.location.protocol.replace(":", "")

const host = process.env.REACT_APP_API_ENDPOINT || window.location.hostname
const envPort = process.env.REACT_APP_API_PORT

const port = envPort ? `:${envPort}` : ""

export const API_HOST = host + port
export const API_PROTOCOL = protocol
