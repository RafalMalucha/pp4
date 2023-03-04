const fs = require('fs')

file = 'data.txt'

data = 'abcd'

if (fs.readFileSync(file, {encoding:'utf8', flag:'r'}) === '') {
    fs.appendFileSync(file, data)
} else {
    fs.appendFileSync(file, '\n')
    fs.appendFileSync(file, data)
}
