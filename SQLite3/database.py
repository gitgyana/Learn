import sqlite3

# Connect to database
conn = sqlite3.connect("customer.db")

# Create a cursor
c = conn.cursor()

# Quert The Database
c.execute("SELECT * FROM customers")
# print(c.fetchone())
# print(c.fetchmany(3))

items = c.fetchall()

print("NAME " + "\t\tEMAIL")
print("-----" + "\t\t" + "--------")
for item in items:
    print(item[0] + " " + item[1]  + "\t\t" + item[2])


# print("Command executed successfully...")
# Commit our command
conn.commit()

# Close our connection
conn.close()
