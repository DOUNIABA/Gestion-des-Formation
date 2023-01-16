const supertest = require('supertest')
module.exports= app=> describe('Organisme test', () => {
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

  it('Suppression Organisme', async () => {
    const res = await supertest(app)
      .delete('/api/organisme/delete/63c50a2afe5b4528c03d19fd')
      expect(res.statusCode).toEqual(200)
  })

  it('Modification Organisme', async () => {
    const res = await supertest(app)
      .patch('/api/organisme/update/')
      .send({
        name: "Dounia",
        email: "douniaba@gmail.com",
        tele:"1234567",
      })
    expect(res.statusCode).toEqual(200)
  })
  
})
