import express from "express"
import RestaurantsCtrl from "../dao/restaurants.controller.js"   
const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

export default router