
-- N - N' city from station
select count(city) - count(distinct city) from station;

'''
Query the two cities in station with the shortest and longest city names, as well as their respective lengths (i.e. the number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically):

'''

SELECT 
	city, CHAR_LENGTH(city) 
	from station 
	where CHAR_LENGTH = 
		SELECT 
			min(CHAR_LENGTH(city)),
			max(CHAR_LENGTH(city)) from station;i

SELECT city, LENGTH(city) from station order by length(city) ASC limit 1;
SELECT city, LENGTH(city) from station order by length(city) DESC limit 1;



select CITY, length(CITY)from station order by length(CITY), city limit 1; 
select CITY, length(CITY)from station order by length(CITY) desc, city limit 1; 





