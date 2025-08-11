import sqlite3

# Connect to database
conn = sqlite3.connect("customer.db")

# Create a cursor
c = conn.cursor()

many_customers = [
    ('Wes', 'Browm', 'wes@brown.com'),
    ('Steph', 'Kuewa', 'steph@kuewa.com'),
    ('Dan', 'Pas', 'dan@pas.com'),
]

c.executemany("INSERT INTO customers VALUES (?,?,?)", many_customers)



print("Command executed successfully...")

# Commit our command
conn.commit()

# Close our connection
conn.close()
