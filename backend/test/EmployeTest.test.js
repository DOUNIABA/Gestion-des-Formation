const supertest = require('supertest')

module.exports= app=> describe('Employe test', () => {
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

  it('Suppression Employe', async () => {
    const res = await supertest(app)
      .delete('/api/emlpoye/delete/63c50a2afe5b4528c03d19fd')
      expect(res.statusCode).toEqual(200)
  })

  it('Modification Employé', async () => {
    const res = await supertest(app)
      .patch('/api/emlpoye/update/')
      .send({
        name: "Dounia",
        email: "douniaba@gmail.com",
        tele:"1234567",
      })
    expect(res.statusCode).toEqual(200)
  })
  
})
