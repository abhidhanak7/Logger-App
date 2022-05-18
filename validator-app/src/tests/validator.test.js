const request = require('supertest')
const app = require('../../app')
const { exitOnError } = require('../logger/logger')
const {fetchFromQueue} = require('../routers/data-validator')

test('consume msg', async () => {
      expect(fetchFromQueue())
    
    
})