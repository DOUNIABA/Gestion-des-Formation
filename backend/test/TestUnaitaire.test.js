const supertest = require('supertest')
const app = require('../index');

 describe('Login function', () => {
  it('login', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "dounia@gmail.com",
        password: "aze",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('not login', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "test@gmail.com",
        password: "aze",
      })
    expect(res.statusCode).toEqual(400)
  })
})



 describe('Employe test', () => {
    it('Ajout emlpoye', async () => {
      const res = await supertest(app)
        .post('/api/employe/createemployes')
        .send({
          name: "Dounia",
          email: "douniaba@gmail.com",
          tele:"1234567",
        })
      expect(res.statusCode).toEqual(200)
    })
  
    it("not deleted Employe", async () => {
      const res = await supertest(app)
        .delete('/api/emlpoye/delete/63c68d56ce0d8390aa43196c')
        expect(res.statusCode).toEqual(404)
    })
  
    it('Modification Employé', async () => {
      const res = await supertest(app)
        .put('/api/emlpoye/update/63c68d56ce0d8390aa43196c')
        .send({
          name: "Dounia",
          email: "douniaba@gmail.com",
          tele:"2222222",
        })
      expect(res.statusCode).toEqual(404)
    })
    
  })

 describe('Organisme test', () => {
  it('Ajout organisme', async () => {
    const res = await supertest(app)
      .post('/api/organisme/createorganisme')
      .send({
        name: "Dounia",
        email: "douniaba@gmail.com",
        tele:"1234567",
      })
    expect(res.statusCode).toEqual(200)
  })
  
})

describe('Formation test', () => {
    it('Modification Formation', async () => {
      const res = await supertest(app)
        .put('/api/formation/update/63c67c06a72c7fc18137d7b9')
        .send({
          name: "Dounia",
          email: "douniaba@gmail.com",
          tele:"1234567",
        })
      expect(res.statusCode).toEqual(200)
    })
    
  })
  