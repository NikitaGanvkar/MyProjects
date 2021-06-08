import pandas as pd 

#Data preprocessing
df = pd.read_csv("titanic.csv")
df.isna().sum()
df['Age']= df['Age'].fillna(df['Age'].mean())
df.dropna(subset=['Embarked'],inplace=True)
df.isna().sum()

#Chart Attributes to be sent
final=df[['Survived', 'Pclass', 'Age', 'SibSp', 'Parch', 'Fare']]
histdata = final.to_json()
print(histdata)


'''
import numpy as np
import matplotlib.pyplot as plt
import json
#print(df.describe())
#print(df.shape)
#print("The number of columns present is as follows",df.columns.value_counts().sum())
#print("The columns present in the actual dataset is as follows", df.columns.tolist())

cols = df.columns.tolist()
#print("Visualising the dtypes",df.dtypes)
num_cols = df.select_dtypes([np.int64,np.float64]).columns.tolist()
num_cols.remove('PassengerId')
print(num_cols)
#Generating Histograms for numeric columns
for col in num_cols:
    df.hist(column=col)
#Studying the correlation of the columns using scatter plots
from pandas.plotting import scatter_matrix
scatter_matrix(df[num_cols],figsize=(50,50))
obj_cols = df.select_dtypes([np.object]).columns.tolist()
# obj_cols.remove('Name')
# obj_cols.remove('Cabin')
# obj_cols.remove('Ticket')
# print(obj_cols)
#Plotting categorical data against frequency
for col in obj_cols:
    df[col].value_counts().plot(kind='bar')
'''
