const supertest = require('supertest')

module.exports= app=> describe('Formation test', () => {
  it('Ajout formation', async () => {
    const res = await supertest(app)
      .post('/api/formation/createformations')
      .send({
        name: "Dounia",
        email: "douniaba@gmail.com",
        tele:"1234567",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Suppression Formation', async () => {
    const res = await supertest(app)
      .delete('/api/formation/delete/63c50a2afe5b4528c03d19fd')
      expect(res.statusCode).toEqual(200)
  })

  it('Modification Formation', async () => {
    const res = await supertest(app)
      .patch('/api/formation/update/')
      .send({
        name: "Dounia",
        email: "douniaba@gmail.com",
        tele:"1234567",
      })
    expect(res.statusCode).toEqual(200)
  })
  
})
