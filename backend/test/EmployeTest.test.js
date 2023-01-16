const supertest = require('supertest')

module.exports= app=> describe('Employe test', () => {
  it('Create emlpoye', async () => {
    const res = await supertest(app)
      .post('/api/employe/createemployes')
      .send({
        name: "Dounia",
        email: "douniaba@gmail.com",
        tele:"1234567",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Delete Employe', async () => {
    const res = await supertest(app)
      .delete('/api/emlpoye/delete/')
    expect(res.statusCode).toEqual(200)
  })

//   it('Modifier Employe', async () => {
//     const res = await supertest(app)
//       .patch('/api/emlpoye/update/')
//       .send({
//         name: "Dounia",
//         email: "douniaba@gmail.com",
//         tele:"1234567",
//       })
//     expect(res.statusCode).toEqual(200)
//   })
  
})
