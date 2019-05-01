var namePartOne = ["Ai", "Aika", "Aiko", "Aimi", "Aiya", "Akako", "Akane", "Akane", "Akasuki", "Akemi", "Aki", "Akihiko", "Akihiro", "Akiko",
"Akina", "Akira", "Haruki", "Matsumoto", "Toru", "Tengo", "Shuichi", "Ken", "Ao", "Amaterasu", "Amaya", "Ami", "Amida", "Anka", "Annaisha", "Annya",
"Arakan", "Arata", "Arisu", "Asa", "Asami", "Asuka", "Atsushi", "Au", "Yuichi", "Light", "Ayaka", "Ayano", "Ayumi", "Azami", "Azumi", "Botan", "Bunko",
"Chiasa", "Chieko", "Chiharu", "Chika", "Chikako", "Chinami", "Chitose", "Chiyo", "Chizu", "Cho", "Dai", "Daichi", "Daisuke", "Daitan", "Den", 
"Eichi", "Eicho", "Eiko", "Emiko", "Emiyo", "Ana", "Reiko", "Ryo", "Ryoko", "Suki", "Takeo", "Tame", "Tenchi", "Teru", "Teruma", "Tomiko", "Utano", 
"Yasuo", "Yasahiku", "Yoichi", "Yoshi", "Uta", "Suzuki", "Zinan", "Yukio", "Yumena", "Raidon", "Osamu"

]

var namePartTwo = ["andra", "andros", "xios", "xius", "aios", "biades", "brosia", "brosios", "brosius", "pelios", "pelius", "yntas", "stasios", "atolios", "goras", "drocles", "icus",
"keitos", "ochos", "ochus", "pater", "potros", "odisia", "odisios", "naris", "odorros", "adius", "agne", "xopolous", "agnos", "astos", "readis", 
"thes", "this", "antoni", "toniou", "stolos", "stolou", "gyros", "tino", "vanitis", "asker", "athan", "athas", "bakas", "alaban", "allas", "allis",
"arberis", "arba", "biros", "callas", "delis", "ostas", "ontos", "emos", "osse", "osmos", "antinides", "antinides", "antinou", "metriou", "mitriou",
"oukas", "rakos", "rivas", "ukas", "conomides", "conomos", "liades", "otopoulos", "oros", "alatas", "apageorgiou", "ichaelides", "ilonas", "apadakis", "vasilakis", "ografos", 
"assos", "otiropoulos", "erzi", "tavros"

]

function newName() {
    var randomNumber1 = Math.floor(Math.random() * (namePartOne.length));
    var randomNumber2 = Math.floor(Math.random() * (namePartTwo.length));
    document.getElementById('nameDisplay').innerHTML = namePartOne[randomNumber1] + namePartTwo[randomNumber2]
}   