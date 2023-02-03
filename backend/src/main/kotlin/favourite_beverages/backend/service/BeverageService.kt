package favourite_beverages.backend.service

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import org.springframework.stereotype.Service
import java.io.File
import java.io.FileWriter

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
    val fileName = "beverages.json"
    val fileLocation = "./src/main/resources/"
    fun getBeverages(): List<Beverage> {
        val file = File(fileLocation + fileName)
        val beveragesJSON =  file.readText()
        println(beveragesJSON)

        if (beveragesJSON.isEmpty()) return emptyList()

        return gson.fromJson(beveragesJSON,
            object : TypeToken<List<Beverage>>() {}.type
        )
    }

    fun createBeverage(beverage: Beverage): Beverage {

           val beverages = getBeverages()

           val json = gson.toJson(beverages + beverage)
           println(json)

           val writer = FileWriter(fileLocation + fileName)
           writer.write(json)
           writer.close()

           return beverage
    }

}