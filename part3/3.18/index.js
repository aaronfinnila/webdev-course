require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Person = require('./models/person')
const app = express()

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

/* app.use(express.static('dist')) */
app.use(express.json())
app.use(cors())
app.use(requestLogger)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then((person) => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch((error) => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body
  
  const person = new Person({
    name: body.name,
    number: body.number
  })
  
  person.save().then(savedPerson => {
    response.json(savedPerson)
  }).catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
  .then(result => {
    if (result) {
      response.status(204).end()
    } else {
      const error = new Error('Person not found')
      error.status = 404
      return next(error)
    }
  })
  .catch((error) => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})