import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import products from './data/products.js'
import Tenants from './data/tenants.js'

import connectDB from './config/db.js'
import Tenant from './models/tenantModel.js'


dotenv.config()

connectDB()

const importData = async () => {
  try {

    await Tenants.deleteMany()

    const createdTenants = await Tenant.insertMany(tenants)

    const adminUser = createdUsers[0]._id

    const sampleTenants = products.map((tenants) => {
      return { ...tenants, user: adminUser }
    })

    await Tenant.insertMany(sampleTenants)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Tenant.deleteMany()


    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
