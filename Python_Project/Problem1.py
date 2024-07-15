import os

def print_directory_contents(path):
    try:
        # Get the list of all files and directories in the specified path
        directory_contents = os.listdir(path)
        
        # Print each item in the directory
        for item in directory_contents:
            print(item)
    except FileNotFoundError:
        print(f"The directory '{path}' does not exist.")
    except NotADirectoryError:
        print(f"The path '{path}' is not a directory.")
    except PermissionError:
        print(f"Permission denied for accessing the directory '{path}'.")

# Example usage
directory_path = "/Users/phani/Downloadss"
print_directory_contents(directory_path)