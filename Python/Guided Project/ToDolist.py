# todo_list = ["Task 1", "Task 2"]
todo_list = []
while True:
    # new_task = input("Enter the task: ")
    # todo_list.append(new_task)
    # print(f"Task '{new_task}' added.")

    # if not todo_list:
    #     print("Your ToDo list is empty")
    # else:
    #     index = 1
    #     for task in todo_list:
    #         print(f"{index}. {task}")
    #         index += 1

    print("Options:")
    print("1. Add Task")
    print("2. Remove Task")
    print("3. Quit")

    choice = input("Enter your choice (1, 2, or 3): ")

    if choice == "1":
        new_task = input("Enter the task: ")
        todo_list.append(new_task)
        print(f"Task '{new_task}' added to the ToDo list")
        print(f"Task remaining {todo_list} :")
    elif choice == "2":
        if len(todo_list) == 0:
            print("Your ToDo list is empty")
        else:
            todo_list.pop()
            print("Last task removed from the ToDo list")
            print(f"Task remaining {todo_list} :")
    elif choice == "3":
        print("Quitting")
        break