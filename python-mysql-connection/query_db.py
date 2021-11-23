import datetime
import mysql.connector

cnx = mysql.connector.connect(user='root', password='123', database='employees')
cursor = cnx.cursor()

query = ("SELECT first_name, last_name, hire_date FROM employees "
         "WHERE first_name=%s AND hire_date BETWEEN %s AND %s")

first_name = 'Shashwat'
hire_start = datetime.date(1999, 1, 1)
hire_end = datetime.date(2999, 12, 31)

cursor.execute(query, (first_name, hire_start, hire_end))

for (first_name, last_name, hire_date) in cursor:
    print("{}, {} was hired on {:%d %b %Y}".format(
        last_name, first_name, hire_date))

# trial queries

query2 = ("SELECT * FROM employees WHERE first_name='Shashwat' LIMIT 5")
cursor.execute(query2)
record = cursor.fetchall()

for row in record:
    print(row)

cursor.close()
cnx.close()
