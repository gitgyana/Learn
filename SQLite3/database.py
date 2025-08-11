import sqlite3

conn = sqlite3.connect("customer.db")

# Create a cursor
c = conn.cursor()
