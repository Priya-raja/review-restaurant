import express from "express"
import RestaurantsDAO from "../dao/restaurantsDAO.js";
import RestaurantsCtrl from "..dao/restaurants.controller.js"   
const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants)

export default router