import pandas as pd

# Step 1: Get roll number range
start = int(input("Enter starting roll number: "))
end = int(input("Enter ending roll number: "))

# Step 2: Take attendance
absent_list = []
for roll in range(start, end + 1):
    while True:
        status = input(f"Roll No {roll} (0 = Present, 1 = Absent): ")
        if status == '0':
            break
        elif status == '1':
            absent_list.append(roll)
            break
        else:
            print("❌ Please enter only 0 or 1.")

# Step 3: Show Absent List First
print("\n📋 Absent Students List:")
if absent_list:
    for r in sorted(absent_list):
        print(f"• Roll No {r}")
else:
    print("🎉 All students are present!")

# Step 4: Ask for update **after showing list**
choice = input("\nDo you want to update the list? (y/n): ").lower()

while choice == 'y':
    action = input("Enter 'd' to DELETE (mark present), 'i' to INSERT (mark absent): ").lower()
    
    if action == 'd':
        roll = int(input("Enter roll no to remove (mark present): "))
        if roll in absent_list:
            absent_list.remove(roll)
            print(f"✅ Roll No {roll} marked as Present.")
        else:
            print("❌ Roll not in absent list.")
    
    elif action == 'i':
        roll = int(input("Enter roll no to add (mark absent): "))
        if roll not in absent_list and start <= roll <= end:
            absent_list.append(roll)
            print(f"✅ Roll No {roll} marked as Absent.")
        else:
            print("❌ Already marked absent or invalid roll number.")
    
    else:
        print("❌ Invalid option. Use only 'd' or 'i'.")

    # Show updated list
    print("\n📋 Updated Absent List:")
    if absent_list:
        for r in sorted(absent_list):
            print(f"• Roll No {r}")
    else:
        print("🎉 All students are present!")

    choice = input("\nDo you want to continue editing? (y/n): ").lower()

# Step 5: Save to CSV
file_name = input("\nEnter file name to save (without .csv): ") + ".csv"
df = pd.DataFrame(sorted(absent_list), columns=["Absent Roll No"])
df.to_csv(file_name, index=False)
print(f"\n✅ Final absent list saved to '{file_name}'")
