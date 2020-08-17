// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
//var map, infoWindow;
var locations = [
  ['Linha: L001',-29.2485989,-51.1260841,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2390088,-51.1550028,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2343702,-51.1549396,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2325165,-51.1556584,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2307861,-51.1590944,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2245337,-51.1608517,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2041876,-51.1723748,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2057422,-51.1723534,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2072837,-51.1713432,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2092871,-51.1719478,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2073707,-51.1746769,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2058574,-51.174751,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2043174,-51.1747381,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L001',-29.2037302,-51.176515,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L002',-29.1598383,-51.1376941,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1601942,-51.1362307,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1597223,-51.1291456,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1576012,-51.1304492,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1536367,-51.127157,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1527958,-51.1225276,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1527584,-51.1164363,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1554874,-51.1164202,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1573817,-51.1154495,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1602931,-51.116188,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1600871,-51.1120116,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.171771,-51.1240319,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1741249,-51.124005,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1604414,-51.1262183,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1684729,-51.1271741,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L002',-29.1671512,-51.1333167,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L003',-29.1930721,-51.1670575,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.1927559,-51.1649297,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.1927515,-51.1634563,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.1927141,-51.1617156,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.1959535,-51.164455,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.1968889,-51.165153,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.1979643,-51.1642979,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.2003588,-51.1615568,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.1833871,-51.156896,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L003',-29.177867,-51.1573288,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L004',-29.1995675,-51.1955287,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L004',-29.1995816,-51.1906251,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L004',-29.2027098,-51.1847791,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L004',-29.2017808,-51.1856749,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L004',-29.1978229,-51.1920156,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L004',-29.1944765,-51.1958871,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L005',-29.1177712,-51.1806917,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1076871,-51.1993725,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1155922,-51.18654,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1212761,-51.1892697,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1194726,-51.1927073,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1182103,-51.1917317,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1194327,-51.1909182,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1196349,-51.1893646,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1190109,-51.1849852,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.120256,-51.1823166,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.121449,-51.1793514,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1191372,-51.177265,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1194395,-51.1735045,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L005',-29.1219831,-51.1712836,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.2168814,-51.12096,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1990579,-51.1335062,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1908777,-51.1515642,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1865234,-51.1520852,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1842192,-51.1520209,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1774146,-51.152101,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1809087,-51.149695,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1801265,-51.1475546,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1809649,-51.1431075,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1750209,-51.1446444,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L006',-29.1736039,-51.1565102,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L007',-29.1911128,-51.1698545,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L007',-29.1904127,-51.1687026,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L007',-29.1880208,-51.165899,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L007',-29.1872254,-51.1666909,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L007',-29.1855722,-51.1647416,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L008',-29.2433828,-51.199249,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2221975,-51.19634,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.220457,-51.1978461,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.218383,-51.1993566,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2152923,-51.1969373,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2093394,-51.1972181,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2085844,-51.1934657,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.207866,-51.1921705,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2082273,-51.1963949,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2040393,-51.1909364,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2029424,-51.1908184,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.201917,-51.1931305,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L008',-29.2009518,-51.1937313,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L009',-29.1577994,-51.1933543,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1562992,-51.1778315,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1580426,-51.1750836,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1587375,-51.1717037,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1544333,-51.1766429,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1521991,-51.1739888,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1552625,-51.1717883,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1547168,-51.1680535,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1571648,-51.1647652,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.158,-51.1616323,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1564447,-51.1581668,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1541621,-51.1540488,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L009',-29.1532037,-51.1515,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L010',-29.1483677,-51.1503531,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1362096,-51.144,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1350741,-51.1444818,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1350764,-51.1454738,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1351361,-51.1500029,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1423601,-51.142493,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1419731,-51.1369264,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1412399,-51.1369532,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1368245,-51.1370341,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1353595,-51.1368071,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.134083,-51.136863,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1298152,-51.1381541,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L010',-29.1272447,-51.1393445,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1540307,-51.1440026,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1553471,-51.1438309,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1553986,-51.145231,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1549114,-51.1467384,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1553284,-51.1479991,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1573996,-51.1470871,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.157676,-51.1430584,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1589127,-51.1414759,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1589268,-51.1398612,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.151136,-51.1337955,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1481048,-51.1305071,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1486155,-51.1311884,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.149031,-51.1321003,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1497384,-51.1359492,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1483369,-51.1360106,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1465596,-51.1360495,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L011',-29.1387839,-51.1328303,'Caxiense', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L012',-29.2082369,-51.2368702,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.2072279,-51.2368701,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.2053459,-51.2371727,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.2011781,-51.2372591,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.199621,-51.2380262,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.1965678,-51.2357061,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.197727,-51.2335511,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.2004757,-51.2327197,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.202679,-51.2308639,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.2049931,-51.2306985,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.2221958,-51.2322051,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.196894,-51.2141929,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.1906217,-51.2108435,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L012',-29.1874821,-51.208764,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L013',-29.1510177,-51.2280849,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1505673,-51.2195819,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1532451,-51.2089999,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1514837,-51.1978481,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1406211,-51.1932019,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1412102,-51.1917921,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1362431,-51.1907553,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1363236,-51.1894098,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1378135,-51.1897684,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1391442,-51.1891441,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1533717,-51.1997382,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L013',-29.1391712,-51.1859254,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L014',-29.1140459,-51.1347316,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L014',-29.1153154,-51.1347236,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L014',-29.1152123,-51.1318537,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L014',-29.1139621,-51.1314419,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L015',-29.1654724,-51.2244591,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.1667381,-51.2257675,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.167603,-51.2265238,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.1685494,-51.2249209,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.1688318,-51.2222115,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.169249,-51.220602,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.170867,-51.2172567,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.1705959,-51.2309685,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.171269,-51.2349677,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.1734239,-51.2352387,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.173677,-51.2481455,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.1742538,-51.2508126,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L015',-29.1756725,-51.2508006,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L016',-29.1611488,-51.2083736,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L016',-29.1629181,-51.2228424,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L016',-29.1670028,-51.225974,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L016',-29.1756725,-51.2508006,'Caxiense', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L017',-29.1886137,-51.2138456,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.186909,-51.213698,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.1864969,-51.2114289,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.1851996,-51.2109193,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.1834011,-51.2081888,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.1823708,-51.2070247,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.182352,-51.2054797,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.1827689,-51.2041816,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L017',-29.185785,-51.1959016,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L018',-29.1793377,-51.1849633,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L018',-29.1886379,-51.1781449,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L018',-29.1894087,-51.1757186,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L018',-29.1892636,-51.1729667,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L018',-29.1881569,-51.1691344,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L018',-29.1854072,-51.1692513,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L018',-29.1832478,-51.166911,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L019',-29.1625059,-51.1631849,'caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L019',-29.1635392,-51.163606,'caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L019',-29.1642457,-51.1705196,'caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L019',-29.1699791,-51.1675134,'caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L019',-29.1734646,-51.1673959,'caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L019',-29.1758842,-51.1670974,'caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L019',-29.1758061,-51.1623741,'caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L020',-29.1006526,-51.1238401,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.10032,-51.1238495,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.1002698,-51.1242603,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.1002487,-51.1247217,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.100334,-51.1230799,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.0990529,-51.1233689,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.0987482,-51.1244418,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.1103666,-51.1062953,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L020',-29.1124509,-51.1062534,'Caxiense', 'Aguardar o transporte a partir de: 16:30:00'],
  ['Linha: L021',-29.1946517,-51.2057988,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.1948401,-51.2088065,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.1960182,-51.2072502,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.1967675,-51.2045036,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.1968939,-51.2022184,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.1940197,-51.200059,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.1984877,-51.1819564,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.2000984,-51.1814924,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.19846,-51.1803978,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.195549,-51.1790859,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L021',-29.1922424,-51.1800885,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L022',-29.1252007,-51.2010253,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1316098,-51.195283,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1343885,-51.1984856,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1365087,-51.2010111,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.140523,-51.2051605,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1403754,-51.2092253,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1404861,-51.2105491,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1417495,-51.213692,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.148791,-51.1955538,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1470726,-51.1945848,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1447347,-51.1892392,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1201453,-51.1833452,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1212701,-51.1812248,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1214739,-51.1797737,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1207089,-51.1761101,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L022',-29.1206469,-51.1740574,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1428045,-51.171761,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1395968,-51.172225,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1357064,-51.1755771,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.13839,-51.1761376,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1377809,-51.1792892,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1377423,-51.1776241,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1399076,-51.1771228,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1419996,-51.1783432,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1419242,-51.1754663,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1449109,-51.1745233,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1453904,-51.1698101,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L023',-29.1482013,-51.1654431,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L024',-29.1207733,-51.1316613,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L024',-29.1202678,-51.1338491,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L024',-29.1197741,-51.1345739,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L024',-29.1197829,-51.1352766,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L024',-29.118428,-51.1337585,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L024',-29.1181046,-51.1314357,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L024',-29.1171111,-51.1289573,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L024',-29.11638,-51.1271924,'Caxiense', 'Aguardar o transporte a partir de: 16:28:00'],
  ['Linha: L025',-29.1269747,-51.1210485,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.1275213,-51.1180365,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.1249417,-51.1157012,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.1191223,-51.1007197,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.120567,-51.1001708,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.1096098,-51.0797771,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.1039486,-51.086155,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.112716,-51.0921915,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L025',-29.1142956,-51.0948578,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L026',-29.1652199,-51.1885511,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L026',-29.1659187,-51.1797838,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L026',-29.1657656,-51.1748132,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L026',-29.1661931,-51.1584374,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L026',-29.1639402,-51.1497781,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L026',-29.1615342,-51.1544399,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L026',-29.1582726,-51.1536377,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L027',-29.2034545,-51.2099721,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2047085,-51.2100105,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2061487,-51.2093698,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2069097,-51.2109723,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2074266,-51.2102465,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.207443,-51.2092514,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2068658,-51.2076373,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2047649,-51.2079516,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2021742,-51.2085692,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2008496,-51.2085296,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.2007642,-51.2066792,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.1999515,-51.205822,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L027',-29.1985929,-51.2041909,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1639574,-51.2287818,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1647021,-51.232005,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1659626,-51.2342563,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1679506,-51.2352272,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1659833,-51.237035,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1336572,-51.2346758,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1294621,-51.2416554,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L028',-29.1252306,-51.2435513,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L029',-29.2022924,-51.2107045,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.1991138,-51.2092552,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.1991516,-51.2069712,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.2035006,-51.2042743,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.2044879,-51.2024526,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.2038145,-51.2007441,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.17574,-51.2063009,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.1710799,-51.2116481,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.1651889,-51.2110747,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.1640741,-51.2061475,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.1595788,-51.2021057,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L029',-29.1515015,-51.1978325,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L030',-29.1823088,-51.1579178,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.1826141,-51.1584467,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.1826118,-51.1606461,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.1835471,-51.1640665,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.1820347,-51.1638573,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.1814888,-51.163302,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.1795408,-51.1619205,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.178937,-51.1597554,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.1777472,-51.1591512,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L030',-29.172217,-51.1603413,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L031',-29.3840633,-51.2682458,'Nova Palmira', 'Aguardar o transporte a partir de: 15:40:00'],
  ['Linha: L031',-29.3909193,-51.2658603,'Nova Palmira', 'Aguardar o transporte a partir de: 15:40:00'],
  ['Linha: L031',-29.3937193,-51.2643008,'Nova Palmira', 'Aguardar o transporte a partir de: 15:40:00'],
  ['Linha: L031',-29.3962938,-51.2634717,'Nova Palmira', 'Aguardar o transporte a partir de: 15:40:00'],
  ['Linha: L031',-29.3968079,-51.2586132,'Nova Palmira', 'Aguardar o transporte a partir de: 15:40:00'],
  ['Linha: L031',-29.3968219,-51.2559236,'Nova Palmira', 'Aguardar o transporte a partir de: 15:40:00'],
  ['Linha: L031',-29.1844944,-51.1685245,'Nova Palmira', 'Aguardar o transporte a partir de: 15:40:00'],
  ['Linha: L032',-29.1925249,-51.2033238,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1924281,-51.2069125,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1908434,-51.2069738,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1900306,-51.2059095,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1889011,-51.2032557,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1853671,-51.1990342,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1724093,-51.1955502,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1706335,-51.1955931,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1681224,-51.1995302,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1683864,-51.2059045,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.169233,-51.1987688,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.16613,-51.1926014,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1652338,-51.1912994,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1587947,-51.1932622,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.1515183,-51.1931894,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L032',-29.150498,-51.1905328,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L033',-29.1798938,-51.1674179,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1816348,-51.1678531,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1768962,-51.1627966,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1739134,-51.1500626,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1738306,-51.1436482,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1804709,-51.1346113,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1783836,-51.1344397,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1767194,-51.1360412,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1766655,-51.1365857,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1767123,-51.1371583,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1741809,-51.1397377,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.172124,-51.1405405,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L033',-29.1704257,-51.1405003,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L034',-29.1140084,-51.1340785,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.115197,-51.1340356,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.1105217,-51.1248444,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.1104775,-51.1214359,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.1090328,-51.1203683,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.1071792,-51.120382,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.1053622,-51.1204278,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.1036971,-51.1232624,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L034',-29.1045103,-51.1222083,'Bragé', 'Aguardar o transporte a partir de: 16:32:00'],
  ['Linha: L035',-29.1927323,-51.1691453,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L035',-29.1921694,-51.1661546,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L035',-29.1895404,-51.1642302,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L035',-29.1881102,-51.1639088,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L035',-29.186696,-51.1630517,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L035',-29.1854978,-51.1623903,'Bragé', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L036',-29.0906439,-51.1570823,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.0982376,-51.141842,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1049106,-51.1300617,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1040048,-51.1273102,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1034221,-51.1257865,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1032815,-51.124735,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.102945,-51.1238875,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1060491,-51.1247937,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1078876,-51.1248298,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.10948,-51.1248476,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1119421,-51.1249762,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1131489,-51.1240831,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1131676,-51.1219695,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1141846,-51.1208738,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L036',-29.1170575,-51.1208684,'Bragé', 'Aguardar o transporte a partir de: 16:35:00'],
  ['Linha: L037',-29.1310875,-51.1813809,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.129202,-51.1787312,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.1265223,-51.1750587,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.1258897,-51.1703354,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.1258431,-51.1687591,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.1257763,-51.1661748,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.125755,-51.1647792,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.1255941,-51.1595966,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.1226881,-51.1212746,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.123624,-51.1202701,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L037',-29.1243778,-51.1183412,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L038',-29.1836486,-51.1881712,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.182948,-51.1908006,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1826132,-51.1935215,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1823232,-51.1951793,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1816119,-51.1996124,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1788374,-51.1971823,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1781835,-51.1925549,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1753966,-51.1928499,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1704007,-51.1883761,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1691336,-51.1883544,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1334998,-51.1242707,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L038',-29.1342187,-51.1188074,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L039',-29.459673,-51.3079633,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.4600711,-51.3068021,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.4624625,-51.2971423,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.462749,-51.2961128,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.4543071,-51.3027421,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.4484926,-51.3153221,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.450808,-51.3146694,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.3981393,-51.2663729,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.3995586,-51.2656822,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.3993203,-51.2651914,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.4036229,-51.2674633,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L039',-29.395995,-51.2491598,'Nova Palmira', 'Aguardar o transporte a partir de: 15:18:00'],
  ['Linha: L040',-29.37737,-51.32861,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.38595,-51.30183,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.4024,-51.28902,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.38072,-51.31281,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.40482,-51.30796,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.41787,-51.29394,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.41734,-51.28302,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.39826,-51.25342,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.39488,-51.24438,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.39436,-51.24024,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L040',-29.18446,-51.16846,'Nova Palmira', 'Aguardar o transporte a partir de: 15:15:00'],
  ['Linha: L041',-29.194416,-51.2779494,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.1997014,-51.278276,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.2097758,-51.2855011,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.2106864,-51.2850138,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.2201418,-51.2858225,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.2185158,-51.28184,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.2153688,-51.2755171,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.2140428,-51.2782361,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.2095204,-51.2816535,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.1774307,-51.174989,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.1796814,-51.1726738,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.1797197,-51.1741959,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.1797805,-51.1770497,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L041',-29.1815862,-51.1806958,'Nova Palmira', 'Aguardar o transporte a partir de: 15:50:00'],
  ['Linha: L042',-29.0412828,-50.9539617,'Unidos', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L042',-29.0661153,-50.9691884,'Unidos', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L042',-29.0685965,-50.9730184,'Unidos', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L042',-29.0670562,-50.9741569,'Unidos', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L042',-29.0670704,-50.9773626,'Unidos', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L042',-29.0745453,-50.9909918,'Unidos', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L042',-29.0820561,-51.0099562,'Unidos', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L043',-29.0932342,-51.0313761,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1134069,-51.0172765,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1222822,-51.0029625,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1251584,-51.0031152,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1386559,-51.0034541,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1280698,-51.0093156,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1256208,-51.0118381,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1256048,-51.0165713,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L043',-29.1160252,-51.0810969,'Unidos', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L044',-29.4125129,-51.2615857,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4198141,-51.2812231,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4495201,-51.2562751,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4414369,-51.2362286,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4414484,-51.2463068,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4411077,-51.2741489,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4534125,-51.2874875,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4529525,-51.2911486,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4542027,-51.2951243,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4537697,-51.3010365,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4512631,-51.3076341,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4402883,-51.2935265,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.4243714,-51.2870559,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.417332,-51.2828393,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L044',-29.2937438,-51.162798,'Nova Palmira', 'Aguardar o transporte a partir de: 15:10:00'],
  ['Linha: L045',-29.0918007,-51.1117979,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0864532,-51.1108357,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0861942,-51.1113332,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0778467,-51.1075258,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0780295,-51.1067882,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0792461,-51.107397,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0791476,-51.1084547,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0719018,-51.1023051,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0723988,-51.1014977,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0733649,-51.1008299,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0776633,-51.0999053,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.1000529,-51.0893656,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.0971557,-51.0902767,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.1104399,-51.101053,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.1097902,-51.1059547,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.1139489,-51.1062182,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L045',-29.1154278,-51.1061603,'Bragé', 'Aguardar o transporte a partir de: 16:18:00'],
  ['Linha: L046',-29.1654029,-51.1885325,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L046',-29.1659235,-51.1794408,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L046',-29.1658256,-51.17487,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L046',-29.1676618,-51.1679451,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L046',-29.1674674,-51.160371,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L046',-29.1612073,-51.1566501,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L046',-29.1480478,-51.1419471,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L046',-29.1267499,-51.1276379,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L047',-29.1943307,-51.1942586,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L047',-29.194506,-51.1959974,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L047',-29.1935838,-51.196524,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L047',-29.1906013,-51.2004514,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L047',-29.1897324,-51.1957372,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L047',-29.1895022,-51.1916929,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L047',-29.1889558,-51.1876079,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L048',-29.1797706,-51.1430756,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L048',-29.1720429,-51.1461442,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L048',-29.1701654,-51.1438114,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L048',-29.172624,-51.1356417,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L048',-29.1692092,-51.1360786,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L048',-29.1592013,-51.1344535,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L048',-29.1551025,-51.1362932,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L049',-29.2036404,-51.2051897,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L049',-29.2005379,-51.2041526,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L049',-29.198902,-51.2032112,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L049',-29.1964956,-51.1985226,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L049',-29.1933273,-51.199596,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L049',-29.1231912,-51.1231377,'Caxiense', 'Aguardar o transporte a partir de: 16:10:00'],
  ['Linha: L050',-29.1280355,-51.1821052,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1248148,-51.1880058,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1248734,-51.1908138,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1244506,-51.1849247,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1249033,-51.1825804,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1247838,-51.1791389,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1236566,-51.1769516,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1222624,-51.1754496,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L050',-29.1234129,-51.1734084,'Caxiense', 'Aguardar o transporte a partir de: 16:15:00'],
  ['Linha: L051',-29.1877868,-51.2394488,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1890977,-51.2414772,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1875301,-51.2381832,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1851347,-51.237518,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1879925,-51.2356806,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1873977,-51.233626,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1897688,-51.2338861,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1937175,-51.2403052,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1938478,-51.2390538,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1960872,-51.2383701,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1979329,-51.2403659,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1997986,-51.2417724,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.2011566,-51.2453183,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.2038351,-51.245608,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.2025183,-51.2460668,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1978517,-51.2440085,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1961332,-51.2440625,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1965141,-51.2461605,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1970287,-51.2472074,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1981353,-51.2489246,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1987534,-51.2495496,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L051',-29.1985648,-51.2500017,'Giratur', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L052',-29.1009505,-51.1333309,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1049023,-51.1300758,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1026103,-51.1297528,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1003454,-51.1274597,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1016191,-51.1277085,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1062528,-51.1248213,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1091323,-51.1248686,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1084753,-51.1213424,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1113838,-51.1180781,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L052',-29.1136463,-51.1184639,'Caxiense', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1348911,-51.1715281,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1321573,-51.1724578,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1310125,-51.1750101,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1310195,-51.177635,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1296892,-51.1741548,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1296775,-51.1711661,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1282834,-51.1699591,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L053',-29.1280421,-51.1672237,'Bragé', 'Aguardar o transporte a partir de: 16:25:00'],
  ['Linha: L054',-29.0653478,-51.0378633,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0638107,-51.0276448,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0486912,-51.0139276,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0413568,-51.0452945,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0683057,-51.0533543,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0759881,-51.0702208,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0749451,-51.0734916,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0810898,-51.0818557,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0792968,-51.0818021,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0782476,-51.0817465,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0770976,-51.0840103,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0866593,-51.0801889,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0881876,-51.0809614,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L054',-29.0940555,-51.0891027,'Unidos', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3856918,-51.2289333,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3812052,-51.2247744,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3756743,-51.2251177,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3725912,-51.2221735,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3703662,-51.2194059,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3645059,-51.216595,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3610708,-51.2157877,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3587752,-51.2148198,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3573878,-51.2142015,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3222302,-51.1793708,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3116247,-51.1674179,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.3068459,-51.1675948,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L055',-29.2458053,-51.1564247,'Nova Palmira', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L056',-29.2203032,-51.1800556,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.2196524,-51.1828075,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.2197274,-51.1845349,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.2197955,-51.1871896,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.2183582,-51.18646,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.2182178,-51.1843196,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.176622,-51.183304,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.1747344,-51.1839478,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.1691841,-51.1841033,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.1533761,-51.1858639,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.1495106,-51.1803386,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.1503572,-51.1719606,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.1524036,-51.1659555,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L056',-29.1529126,-51.1569211,'Caxiense', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L057',-29.1536393,-51.2480391,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1530376,-51.2346173,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1513054,-51.2328025,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1600937,-51.2276134,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1585476,-51.2243671,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1608528,-51.2189493,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1616432,-51.2147543,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1593276,-51.2140312,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1581607,-51.2100583,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1469625,-51.1940302,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1384779,-51.1828744,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1178305,-51.1768353,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1176553,-51.1736773,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L057',-29.1175364,-51.1701126,'Caxiense', 'Aguardar o transporte a partir de: 15:55:00'],
  ['Linha: L058',-29.1139244,-51.1298751,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L058',-29.1136053,-51.1283798,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L058',-29.1135694,-51.1267594,'Caxiense', 'Aguardar o transporte a partir de: 16:20:00'],
  ['Linha: L059',-29.1988869,-51.2001965,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.2001295,-51.2002105,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.2019371,-51.2001891,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.202446,-51.1987549,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.200635,-51.1974734,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.1937744,-51.19841,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.1968479,-51.1823671,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.1989856,-51.1822464,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.199876,-51.1805252,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L059',-29.1970319,-51.179119,'Bragé', 'Aguardar o transporte a partir de: 16:05:00'],
  ['Linha: L060',-29.2133573,-51.1944242,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L060',-29.215375,-51.1931188,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L060',-29.2142292,-51.1938331,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L060',-29.2042349,-51.1938176,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L060',-29.2056576,-51.19366,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L060',-29.2050021,-51.1956824,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L060',-29.1705676,-51.1515524,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00'],
  ['Linha: L060',-29.1701605,-51.1555323,'Caxiense', 'Aguardar o transporte a partir de: 16:00:00']  
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -29.1684796, lng: -51.1793861 },
    zoom: 15,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }]
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }]
      }
    ],
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: true, 
  });
  infoWindow = new google.maps.InfoWindow;
  setMarkers(map, locations)

  var card = document.getElementById('pac-card');
  var input = document.getElementById('pac-input');
  var types = document.getElementById('type-selector');
  var strictBounds = document.getElementById('strict-bounds-selector');

  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  // Set the data fields to return when the user selects a place.
  autocomplete.setFields(
    ['address_components', 'geometry', 'icon', 'name']);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    map: map,
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      strokeColor: "orange",
      scale: 6
  },
    anchorPoint: new google.maps.Point(0, -29)
  });


  autocomplete.addListener('place_changed', function () {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindowContent.children['place-icon'].src = place.icon;
    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-address'].textContent = address;
    infowindow.open(map, marker);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function () {
      autocomplete.setTypes(types);
    });
  }

  setupClickListener('changetype-all', []);
  setupClickListener('changetype-address', ['address']);
  setupClickListener('changetype-establishment', ['establishment']);
  setupClickListener('changetype-geocode', ['geocode']);

  document.getElementById('use-strict-bounds')
    .addEventListener('click', function () {
      console.log('Checkbox clicked! New state=' + this.checked);
      autocomplete.setOptions({ strictBounds: this.checked });
    });
}

function setMarkers(map, locations) {

  var markers = new Array();
  var marker, i
  var infowindow = new google.maps.InfoWindow();

  for (i = 0; i < locations.length; i++) {

    var loan = locations[i][0]
    var lat = locations[i][1]
    var long = locations[i][2]
    var pre = locations[i][3]
    var add = locations[i][4]

    latlngset = new google.maps.LatLng(lat, long);

    var marker = new google.maps.Marker({
      map: map, title: loan, position: latlngset
    });
    map.setCenter(marker.getPosition())

    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h6 id="firstHeading" class="firstHeading">' +loan + ' - ' + pre +'</h6>' +
    '<div id="bodyContent">' +
    '<p><b>' + add + '</b>' +
    '</div>';
    var content = contentString 
    // loan +' ' + add

    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
      return function () {
        infowindow.setContent(content);
        infowindow.open(map, marker);
        map.setCenter(marker.getPosition());
      }
    })(marker, content, infowindow));
    // Add marker to markers array
    markers.push(marker);

     // Trigger a click event on each marker when the corresponding marker link is clicked
     $('.marker-link').on('click', function () {

      google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
  });

  }
  //Try HTML5 geolocation.

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  
      infoWindow.setPosition(pos);
      infoWindow.setContent('Localização Atual');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
      infowindow.close();
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
    // infoWindow.setContent(browserHasGeolocation ?
    //   'Falha ao buscar a localização atual, ligue o GPS' :
    //   'Seu navegador não suporta geolocalização');
  infoWindow.open(map);
}
}
