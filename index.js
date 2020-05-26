import createCounter from './scripts/Counter.js'
import printer from './scripts/Printer.js'

const counter = createCounter()

counter.subscribe(printer)
