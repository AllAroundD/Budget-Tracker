const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB

let db
const request = indexedDB.open("budget", 1)

request.onupgradeneeded = function (event) {
  let db = event.target.result
  db.createObjectStore("pending", { autoIncrement: true })
}

request.onsuccess = function (event) {
  db = event.target.result

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase()
  }
}

request.onerror = function (event) {
  console.log("Oops! " + event.target.errorCode)
}

// This function is called when in offline mode, to add record to pending objectStore
function saveRecord(record) {
  const transaction = db.transaction(["pending"], "readwrite")
  const store = transaction.objectStore("pending")

  store.add(record)
}

// This function gets all of the pending transactions and does a bulk api transaction to post all to the db
function checkDatabase() {
  const transaction = db.transaction(["pending"], "readwrite")
  const store = transaction.objectStore("pending")
  const getAll = store.getAll()

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      // do a bulk post of transactions once back online
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json()
        })
        .then(function () {
          // delete records from 'pending' if successful, and clear objectStore ())indexedDB)
          const transaction = db.transaction(["pending"], "readwrite")
          const store = transaction.objectStore("pending")
          store.clear()
        })
    }
  }
}

// listen for app coming back online
window.addEventListener("online", checkDatabase)