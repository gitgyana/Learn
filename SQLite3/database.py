import sqlite3

# Connect to database
conn = sqlite3.connect("customer.db")

# Create a cursor
c = conn.cursor()

c.execute("INSERT INTO customers VALUES ('Mary', 'Brown', 'mary@brown.com')")



print("Command executed successfully...")

# Commit our command
conn.commit()

# Close our connection
conn.close()
