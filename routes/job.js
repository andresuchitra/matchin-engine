const router = require('express').Router()
const jobController = require('../controllers/job')
const authorizeJob = require('../middlewares/authorizeJob')
const authenticate = require('../middlewares/authenticate')

router.use('/', authenticate)

router.get('/', jobController.findAll)
router.get('/:id', authorizeJob, jobController.findOne)
router.post('/', jobController.create)
router.delete('/:id', authorizeJob, jobController.create)

module.exports = router
