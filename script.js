/**
 * Мой аналог window.onload
 * @param callback - функция которую нужно выполнить когда страница будет загружена
 */
const onload = (callback) => {
    console.log(document.readyState) // Это просто для проверки
    // Проверяем состояние загрузки
    if (document.readyState === "complete")  { // Если страница полностью загружена
        callback() // Dыполняем callback функцию
    } else { // Иначе
        // Cоздаем setIinterval в котором каждую 1 мс проверяем состояние загрузки
        const id = setInterval(()=>{
            console.log(document.readyState) // // Это просто для проверки
            if (document.readyState === "complete") { // Если старница полностью загружена
                callback() // Выполняем callback функцию
                clearInterval(id) // Удалем setInterval
            }
                }, 1)
    }
}
// Вызываем наш аналог window.onload
onload(()=> {
    alert('Страница полностью загружена')
})

