import asyncHandler from "express-async-handler";
import Tenant from "../models/tenantModel.js";

const getTenants = asyncHandler(async (req, res) => {
	const pageSize = 10;
	const page = Number(req.query.pageNumber) || 1;

	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: "i"
				}
		  }
		: {};
	let condition = "";
	if (req.query.category) {
		condition = { ...keyword, category: req.query.category };
	} else {
		condition = { ...keyword };
	}
    const count = await Tenant.countDocuments(condition)
    const tenants = await Tenant.find(condition)
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ tenants, page, pages: Math.ceil(count / pageSize) })
  })
  
// @desc    Fetch single tenant
// @route   GET /api/tenants/:id
// @access  Public
const getTenantById = asyncHandler(async (req, res) => {
	const tenant = await Tenant.findById(req.params.id);

	if (tenant) {
		res.json(tenant);
	} else {
		res.status(404);
		throw new Error("Tenant not found");
	}
});

// @desc    Delete a tenant
// @route   DELETE /api/tenants/:id
// @access  Private/Admin
const deleteTenant = asyncHandler(async (req, res) => {
	const tenant = await Tenant.findById(req.params.id);

	if (tenant) {
		await tenant.remove();
		res.json({message: "Tenant removed"});
	} else {
		res.status(404);
		throw new Error("Tenant not found");
	}
});

// @desc    Create a Tenant
// @route   POST /api/tenants
// @access  Private/Admin
const createTenant = asyncHandler(async (req, res) => {
	const tenant = new Tenant({
		name: "Sample name",
		email_1: "Enter Email",
		rent: 0,
        phone: 0,
		category: "Sample category",
        address: "Please Enter AN Address",
		roomNum: 0,
		bedNnum: 0,
		notes: "Sample Notes"
	});

	const createdTenant = await tenant.save();
	res.status(201).json(createdTenant);
});

const updateTenant = asyncHandler(async (req, res) => {
	const {name, rent, notes, phone, roomNum, category, bedNum, address, email_1} = req.body;

	const tenant = await Tenant.findById(req.params.id);

	if (tenant) {
		tenant.name = name;
		tenant.email_1 = email_1;
		tenant.address = address;
		tenant.category = category;
		tenant.phone = phone;
		tenant.roomNum = roomNum;
		tenant.bedNum = bedNum;
		tenant.rent = rent;
		tenant.notes = notes;
        

		const updatedTenant = await tenant.save();
		res.json(updatedTenant);
	} else {
		res.status(404);
		throw new Error("Tenant not found");
	}
});

export {
	getTenants,
	getTenantById,
	deleteTenant,
	createTenant,
	updateTenant,

};