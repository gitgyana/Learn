import sqlite3

# Connect to database
conn = sqlite3.connect("customer.db")

# Create a cursor
c = conn.cursor()

# Quert The Database
c.execute("SELECT * FROM customers")
# c.fetchone()
# c.fetchmany(3)

print(c.fetchall())



# print("Command executed successfully...")

# Commit our command
conn.commit()

# Close our connection
conn.close()
