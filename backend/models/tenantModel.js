import mongoose from "mongoose";

const tenantSchema = mongoose.Schema(
	{  
		name : {type: String},
		phone: {type: Number},
		email: {type: String, required: true, unique: true},
        address: {type: String},
        roomNum:{type: Number},
        bedNum:{type: Number},
        rent:{type: Number},
        isPaid:{type: Boolean, required: true, default: false}

	},	
);

const Tenant = mongoose.model("Tenant", tenantSchema);

export default Tenant;