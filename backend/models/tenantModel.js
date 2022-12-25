import mongoose from "mongoose";

const tenantSchema = mongoose.Schema(
	{  

		name: {
			type: String,
			required: true
		},
		address: {
			type: String,
			required: true
		},
		email_1: {
			type: String,
			required: true,
			unique: true
		},
		notes: {
			type: String,
			required: true
		},
		rent: {
			type: Number,
			required: true,
			default: 0
		},
		roomNum: {
			type: Number,
			required: true,
			default: 0
		},
		bedNum: {
			type: Number,
			required: true,
			default: 0
		},
		phone: {
			type: Number,
			required: true,
			default: 0
		}
	},
	{
		timestamps: true
	}
);

const Tenant = mongoose.model("Tenant", tenantSchema);

export default Tenant;

