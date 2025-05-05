def find_meal(name, menu):
    return name if name in menu else None

def select_meal(name):
    return find_meal(name, italian_food)

def display_available_meals 
    return print("Available Italian Meals:")

italian_food = ["Pasta Bolognese", "Pepperoni pizza", "Margherita pizza", "Lasagna"]
print(find_meal("Margherita pizza", italian_food))
print(find_meal("Tiramisu", italian_food))

