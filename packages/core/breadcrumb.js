const { isoDate } = require('./lib/es-utils')

class BugsnagBreadcrumb {
  constructor (message, metadata, type, timestamp = isoDate()) {
    this.type = type
    this.message = message
    this.metadata = metadata
    this.timestamp = timestamp
  }

  toJSON () {
    return {
      type: this.type,
      name: this.message,
      timestamp: this.timestamp,
      metaData: this.metadata
    }
  }
}

module.exports = BugsnagBreadcrumb
