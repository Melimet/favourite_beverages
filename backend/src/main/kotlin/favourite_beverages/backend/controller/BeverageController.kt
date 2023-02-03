package favourite_beverages.backend.controller

import favourite_beverages.backend.service.Beverage
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import favourite_beverages.backend.service.BeverageService
import org.springframework.validation.annotation.Validated

@RequestMapping("/api/beverages")
@RestController
@Validated
class BeverageController(val service: BeverageService) {
    @GetMapping
    fun getBeverages() = service.getBeverages()

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun saveBeverage(@RequestBody beverage: Beverage): Beverage = service.createBeverage(beverage)
}