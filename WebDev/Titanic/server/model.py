import sys
import json
import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt


#basic logging to check the working of the script
import logging
logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')
y = json.loads(sys.argv[1])
arr=list(y.values())
array = [float(i) for i in arr]
logging.warning(array)


df = pd.read_csv("titanic.csv")
df['Age']= df['Age'].fillna(df['Age'].mean())
df.dropna(subset=['Embarked'],inplace=True)
y = pd.Series(df['Survived'])
drop_list = ['Survived','Name','Ticket','Cabin']
X = df.drop(drop_list,axis=1)

#Encoding
import category_encoders as ce
encoder=ce.OneHotEncoder(handle_unknown='return_nan',return_df=True,use_cat_names=True)
X = encoder.fit_transform(X)

#Model Training and Testing
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,stratify=y,random_state=42)
model = RandomForestClassifier()
model.fit(X_train,y_train)

train_preds = model.predict(X_train)
test_preds = model.predict(X_test)
dict={"Training Accuracy Score": accuracy_score(train_preds,y_train).tolist(),"Training F1 Score": f1_score(train_preds,y_train).tolist(),
"Training ROC AUC Score": roc_auc_score(train_preds,y_train).tolist(), "Testing Accuracy Score": accuracy_score(test_preds,y_test).tolist(),
"Testing F1 Score": f1_score(test_preds,y_test).tolist(), "Testing ROC AUC Score": roc_auc_score(test_preds,y_test).tolist()}

#Model Prediction
import joblib
joblib.dump(model,"model_joblib")

#--Testing
loaded_model = joblib.load("model_joblib")
a = np.asarray(array).reshape(1,-1)
predicted_value= loaded_model.predict(a)
actual_value = y[4]

#Model Prediction Results
dict["Actual Value"] = actual_value.tolist()
dict["Predicted Value"] = predicted_value[0].tolist()
print(json.dumps(dict))

logging.warning(json.dumps(dict))
logging.warning("--End of Script--")




