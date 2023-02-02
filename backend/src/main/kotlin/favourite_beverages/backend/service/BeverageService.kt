package favourite_beverages.backend.service

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import org.springframework.stereotype.Service

var gson = Gson()

enum class BeverageType {
    Coffee, Tea
}

data class Beverage(
    val name: String,
    val weight: Int,
    val price: Float,
    val roastLevel: Int,
    val beverageType: BeverageType
)

@Service
class BeverageService {

    fun getBeverages(): List<Beverage> {
        val beveragesJSON = this::class.java.classLoader.getResource("beverages.json")?.readText()
        println(beveragesJSON)

        return gson.fromJson(beveragesJSON,
            object : TypeToken<List<Beverage>>() {}.type
        )
    }

}