package favourite_beverages.backend.controller

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import favourite_beverages.backend.service.BeverageService

@RequestMapping("/api/beverages")
@RestController
class BeverageController(val service: BeverageService) {
    @GetMapping
    fun getBeverages() = service.getBeverages()

    //@PostMapping
    //@ResponseStatus(HttpStatus.CREATED)
    //fun saveBeverage(@RequestBody beverage: BeverageController): BeverageController = //service.create(beverage)

}