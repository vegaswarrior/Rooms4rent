import express from 'express'
const router = express.Router()
import {
  getTenants,
  getTenantById,
  deleteTenant,
  createTenant,
  updateTenant,
} from '../controllers/tenantController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getTenants).post(protect, admin, createTenant)

router
  .route('/:id')
  .get(getTenantById)
  .delete(protect, admin, deleteTenant)
  .put(protect, admin, updateTenant)

export default router