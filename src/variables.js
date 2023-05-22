import one from './assets/12_Tribes_of_Israel_Map.svg.png'
import two from './assets/Kingdom_of_David.png'
import three from './assets/Kingdoms_of_Israel_and_Judah_map_830.svg.png'
import four from './assets/babylon exile (2).jpg'
import five from './assets/roman_empire.png'
import six from './assets/crusades.png'
import seven from './assets/ottoman.jpg'
import eight from './assets/britishmandate.png'
import nine from './assets/1947.png'
import ten from './assets/1949.png'
import eleven from './assets/1967.png'
import twelve from './assets/israel_map.jpg'

import two_one from './assets/Tel_Dan.jpg'
import four_one from './assets/clay_tablet.jpg'


const text_list = [
    "The Jewish people, the people of Israel, trace their origin to biblical times, starting with Abraham. Abraham’s grandson, Jacob, had 12 sons, Reuben, Simeon, Levi, Judah, Dan, Naphtali,Gad, Asher, Issachar, Zebulun, Joseph and Benjamin. The name Jew originated from Judah (Yehuda). These sons formed the 12 tribes of Israel, which later developed into the Jewish nation, over 3000 years ago."
    ,"From around c.1040 to c.970 BCE, King David ruled over the Kingdom of Israel. He united the 12 tribes, and led them to victory in battles. King David notably defeated the Philistines and captured the City of David, now called Jerusalem.  King Solomon succeeded his father, King David, and built the first Temple in Israel."
    ,"After King Solomon died, between 926 and 922 BCE, the ten northern tribes refused to submit to Solomon’s son, Rehoboam, and revolted. This resulted in two separate kingdoms: the Kingdom of Israel in the north, and the Kingdom of Judah in the south. Now divided, the Assyrians conquered the Kingdom of Israel in 722 BCE. These ten northern tribes, now called the “lost tribes” were scattered across Assyrian empire and lost their religion and identity. "
    ,"Shortly after, in 587 BCE King Nebuchadnezzar II of Babylon conquered Jerusalem and abolished the Kingdom of Judah. The first Temple was destroyed, and the Jewish people were exiled to Babylon. Around 50 years later, Cyrus the Great of the Persian Empire conquered Babylon, and allowed the Jewish exiles to return to Israel, where they built the Second Temple."
    ,"Around 333 BCE, Alexander the Great conquered the region. The Greeks let the Jews run independently for a while, but King Antiochus IV started to impose the Greek religion upon the people. After a revolt by the Maccabees in 167 BCE, Jerusalem was captured and temple worship was restored, now celebrated by the Jewish festival of Hanukkah. "
    ,"Over the next couple hundred years, control of the Land of Israel switched hands many times. First, the Byzantine Empire took control from around 313-636 CE, and the few Jews remaining who hadn’t converted to Christianity faced harsh restrictions. During the Islamic Golden Age, Arab Muslims controlled Israel until 1099, during which they built the Dome of the Rock on top of the destroyed Jewish temples, and treated Jew and Christians as second class citizens. "
    ,"For the next four centuries, the Land of Israel was ruled over by the Ottoman Empire. Immigration back to Israel increased greatly from Catholic Europe and exiled Sephardic Jews (Spanish). Later, at the end of the 19th century, Jewish immigration increased from pogroms and restrictions in the Russian Empire. "
    ,"Following the San Remo conference (1920), in which the League of Nations (now the United Nations), a Jewish state was set to be created in the Mandate of Palestine, including Transjordan. However, Transjordan (now Jordan) was given to the Arabs in 1921. Over the next years, Jewish immigrants were arriving in increasing numbers. However peace between the newly arriving Jews and the Arabs did not last. "
    ,"In 1947, the United Nations proposed the establishment of two separate states, one Jewish and one Arab, in response to growing tensions and conflicts. The UN General Assembly voted on and adopted this partition plan. The Jews accepted the plan, but the Arabs rejected it. "
    ,"During the War of Independence, Israel fought back against the invading Arab countries. However, parts of Israel were captured, now called Gaza and the West Bank. Jordan took control of the West Bank, and Egypt of Gaza, after cease-fire agreements (1949) were set with the shown boundaries. "
    ,"While the cease-fire line was only meant to be a temporary border, it lasted for nearly 20 years. In response to mobilization by the surrounding Arab nations, Israel preemptively attacked in 1967. Over the course of the “Six Day War,” Israel reclaimed its land lost in 1949, and temporarily took control of parts of the Sinai Peninsula and Golan Heights. "
    ," Over the course of the last 50 years, the borders have changed and more wars have been fought. By 1982, Israel withdrew completely from the Sinai Peninsula, relinquishing control back to Egypt. In 1993, the Oslo Accords were signed, setting up Palestinian self-government in the Gaza Strip and West Bank. In 2005, Israel completely withdrew from the Gaza Strip in response to growing terrorism and to create a buffer-zone. Since then, terrorist groups such as Hamas, the PLO, and Hezbollah, have maintained control of the government, often refusing to hold elections while launching thousands of missiles and attacks at Israel. "
  ]
const text2_list = [
  "",
  "King David is the first biblical figure that archaeological proof existed, with the “Tel Dan” stele containing a reference to the “House of David”."
  , ""
  ,"Jehoiachin's Rations Tablets, dated to the 6th century BCE, describe the oil rations set aside for King Jehoiachin while captive in Babylon. "
  ,"In 63 CE, Titus of the Roman Empire led an army into Israel and conquered Jerusalem. The Second Temple was destroyed in 70 CE. The Romans exiled the Jews, and they were dispersed across the region. Judea was renamed to Palaestina, following a revolt in 132 CE, in an attempt to erase the Jewish connection to the Land of Israel. "
  ,"Then, the First Crusade conquered Jerusalem and established a Catholic kingdom. Jews and Muslims were massacred, and were often given the choice of conversion or murder. In the following years, power flipped between Muslims and Christians, but eventually around 1291, the Mamluks of Egypt, warrior slaves, took control. After Spain and Portugal expelled and persecuted Jews in 1492 and 1497 respectively, many Jews decided to return to Israel under Mamluk rule. "
  ,"In 1896, Theodor Herzl published Der Judenstaat (The Jewish State), in which he argued that the establishment of a Jewish state would be the solution to growing antisemitism in Europe. This started the Zionism movement. Petitioned by the newly founded World Zionist Congress, the British government released a public statement, the Balfour Declaration, in support of a Jewish state in the Land of Israel. "
  , "In 1929, following a conflict on the Temple Mount, rumors spread through the Arab community that said Jews were killing Arab en masse. In Hebron, a majority Arab city, these false rumors and libels led to a massacre against the Jewish community in Hebron, which left 67 Jews dead. "
  ,"As the British Mandate was set to expire in 1948, the Jews proclaimed independence and established the State of Israel. The next day the Arab League, composed of Egypt, Transjordan, Iraq, Syria, Lebanon, Saudi Arabia, and Yemen, launched a full fledged invasion in an attempt to eradicate the newly formed Jewish state. "
]
const url_list = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve
    ]
const url2_list = [
  ""
  ,two_one
  ,""
  ,four_one
]
const title_list = [
    "1200 BCE",
    "1040 BCE",
    "922 BCE",
    "587 BCE",
    "63 CE",
    "1135 CE",
    "1516 CE",
    "1920",
    "1947",
    "1949",
    "1967",
    "Present Day"
]

  export {url_list, text_list, text2_list, title_list, url2_list}
