import sqlite3

# Connect to database
conn = sqlite3.connect("customer.db")

# Create a cursor
c = conn.cursor()

# Quert The Database
c.execute("SELECT rowid, * FROM customers")

items = c.fetchall()

for item in items:
    print(item)


# print("Command executed successfully...")
# Commit our command
conn.commit()

# Close our connection
conn.close()
