
const supertest = require('supertest')

module.exports = app => describe('Login function', () => {
  it('login', async () => {
    
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "dounia@gmail.com",
        password: "azer1234",
      })
    expect(res.statusCode).toEqual(200)
  })
})
