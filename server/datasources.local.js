


module.exports = {
  "db": {
    "name": "db",
    "connector": "memory",
    "file": "db.json"
  },
  "mySQL": {
    "host":process.env.OPENSHIFT_MYSQL_DB_HOST || "127.0.0.1",
    "port":process.env.OPENSHIFT_MYSQL_DB_PORT || 3307,
    "url":process.env.OPENSHIFT_MYSQL_DB_URL || "http://127.0.0.1:3307",
    "database": "caretta",
    "password": process.env.OPENSHIFT_MYSQL_DB_PASSWORD || "usbw",
    "name": "mySQL",
    "connector": "mysql",
    "user":process.env.OPENSHIFT_MYSQL_DB_USERNAME || "root"
  },
  "storage": {
    "name": "storage",
    "connector": "loopback-component-storage",
    "provider": "filesystem",
    "root":process.env.OPENSHIFT_DATA_DIR || "./server/storage"
  }
}
