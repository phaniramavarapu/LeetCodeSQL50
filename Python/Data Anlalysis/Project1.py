import pandas as pd

file_path = "/Users/phani/Downloads/train_and_test2.csv"

df = pd.read_csv(file_path)
top5 = df.head()
print(top5)