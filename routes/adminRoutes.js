import { employees } from '../data/employee'

export default (app) => {
  app.get('/api/employees', (req, res) => {
    res.json({
      result: employees,
    })
  })
}
