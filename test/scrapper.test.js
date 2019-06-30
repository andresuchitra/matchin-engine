const chai = require('chai')
const chaiHttp = require('chai-http')

const { scrapJob, scrapProfile } = require('../helpers/linkedin-scrapper')

chai.use(chaiHttp)

const expect = chai.expect

describe.only('Scrapper Tests', function () {
  this.timeout(50000)
  describe('Job scrapper test', () => {
    it('should run', (done) => {
      let jobUrl = 'https://www.linkedin.com/jobs/view/1274802112/'
      scrapJob(jobUrl)
        .then(data => {
          expect(Object.keys(data)).to.have.lengthOf.above(0)
          done()
        })
        .catch(err => console.log(err))
    })
  })
  describe('Profile scrapper test', () => {
    it('should run', (done) => {
      let profileUrl = 'https://www.linkedin.com/in/helenant/'
      let auth = {
        email: 'prasetio017@gmail.com',
        password: 'prasetio017'
      }
      scrapProfile(profileUrl, { auth })
        .then(data => {
          expect(Object.keys(data)).to.have.lengthOf.above(0)
          done()
        })
        .catch(err => console.log(err))
    })
  })
})
